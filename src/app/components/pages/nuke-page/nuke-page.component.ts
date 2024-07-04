import { Component, ViewEncapsulation, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { getCurrentDB } from '../../../services/db';
import { liveQuery, Observable as DexieObservable, IndexableTypePart, IndexableTypeArray } from 'dexie';
import { NukeBoss, NukeDrop, NukeType } from '../../../models/NukeCounterModels';
import { deepCopy, rgba2hex } from '../../../utils/util-functions';
import * as moment from 'moment';
import { Observable, map, reduce, switchMap, from, concatMap, forkJoin } from 'rxjs';
import { EChartsOption } from 'echarts';
import { ThemeService } from '../../../services/theme.service';
import { Fo76Service } from '../../../services/fo76.service';

export interface TableNukeDrop extends NukeDrop {
  nukeType: NukeType;
  nukeBoss: NukeBoss;
  dropLocation: string;
}

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

interface ChartData {
  xAxisData: string[],
  seriesData: number[][],
  seriesLabels: string[]
}

interface SeriesData {
  name: string;
  value: number;
}

@Component({
  selector: 'app-nuke-page',
  templateUrl: './nuke-page.component.html',
  styleUrl: './nuke-page.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NukePageComponent {
  readonly DATE_FORMAT = "MMMM Do YYYY, h:mm a";
  tableNukeDrops$ = liveQuery(() => this.getNukeDrops());
  nukeTypes$ = liveQuery(() => getCurrentDB().nukeTypes.toArray());
  
  filterNukeType: NukeType[] = [];
  currentDrops: TableNukeDrop[] = [];
  displayNukeDrops = signal<TableNukeDrop[]>([]);
  displayNukeDrops$ = toObservable(this.displayNukeDrops);

  nukeTableFirst: number = 0;
  nukeTableRows: number = 7;

  nukeDropSeriesData$: Observable<SeriesData[]> = this.getNukeDropSeriesData();
  // nukeDropPieChart$ = liveQuery(() => this.getNukeTypeCounts());
  // pieChartOptions$: Observable<EChartsOption> = this.getChartOptions(this.tableNukeDrops$, "Nuke Types Pie Chart");
  pieChartOptions = signal(null);
  pieChartOptions$ = toObservable(this.pieChartOptions);

  constructor(public themeService: ThemeService, public fo76Service: Fo76Service) { 
    this.tableNukeDrops$.subscribe(async (drops) => {
      console.log("Nuke Drops Changed")
      
      this.currentDrops = drops;
      this.displayNukeDrops.set(this.filterNukeDrops(drops));
      const seriesData = await this.getNukeTypeCounts();
      this.pieChartOptions.set(this.buildNukeTypePieChart(seriesData));
    })
    this.themeService.currentTheme$.subscribe(async (theme) => {      
      const seriesData = await this.getNukeTypeCounts();
      this.pieChartOptions.set(this.buildNukeTypePieChart(seriesData));
    });
  }

  openAddNuke(): void {
    this.fo76Service.addNukeDialogOpen.set(true);
  }

  updateFilter(value: NukeType[]): void {
    this.displayNukeDrops.set(this.filterNukeDrops(this.currentDrops));
  }

  async getNukeDrops(): Promise<TableNukeDrop[]> {
    // Query
    const original_drops = await getCurrentDB().nukeDrops.toArray();
    
    const new_drops: TableNukeDrop[] = await Promise.all(original_drops.map(async drop => {
      const tableDrop = deepCopy(drop) as TableNukeDrop;
      const nukeType = await getCurrentDB().nukeTypes.get(drop.type_id);
      const nukeBoss = nukeType.boss_id ? await getCurrentDB().nukeBosses.get(nukeType.boss_id) : null;
      tableDrop.date = drop.date ? moment.default(drop.date) : null;
      tableDrop.nukeType = nukeType;
      tableDrop.nukeBoss = nukeBoss;
      tableDrop.dropLocation = nukeType?.location ?? nukeBoss?.location ?? drop.custom_location;
      return tableDrop;
    }));
    
    return new_drops;
  }

  filterNukeDrops(drops: TableNukeDrop[]): TableNukeDrop[] {
    if(this.filterNukeType.length > 0){
      const ids = this.filterNukeType.map((type) => type.id);
      return drops.filter((drop) => {
        return ids.includes(drop.type_id);
      })
    }
    return drops;
  }

  onPageChange(event: PageEvent) {
    this.nukeTableFirst = event.first;
    this.nukeTableRows = event.rows;
  }

  private getNukeDropSeriesData(): Observable<SeriesData[]> {
    return from(getCurrentDB().nukeDrops.orderBy('type_id').uniqueKeys()).pipe(
      concatMap((data: IndexableTypeArray, index: number) => {
        data
        const observables = data.map(async part => {
            const uniqueId = part as string;
            const name = (await getCurrentDB().nukeTypes.get(uniqueId)).name ?? "Error";
            const count = await getCurrentDB().nukeDrops.where("type_id").equals(uniqueId).count();
            return {
              name: name,
              value: count
            } as SeriesData;
        });
        return forkJoin([...observables]);
      })
    )
  }

  private buildNukeTypePieChart(seriesData: SeriesData[], title='Nuke Drops', radius='75%'): any {
    const style = getComputedStyle(document.body);
    const textColor = style.getPropertyValue('--text-color');
    const fixedColor = rgba2hex(textColor);
    console.log(fixedColor)
    return {
      tooltip: {
        trigger: 'item'
      },
      title: {
        text: 'Nuke Drop Types',
        textStyle: {
          fontSize: 12,
          color: fixedColor
        },
        left: 'center'
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 25,
        bottom: 20,
        textStyle: {
          color: fixedColor
        }
      },
      series: [
        {
          name: title,
          type: 'pie',
          radius: [radius],
          center: ['25%', '55%'],
          avoidLabelOverlap: true,
          itemStyle: {
            borderRadius: 0,
            borderColor: '#fff',
            borderWidth: 2
          },    
          data: seriesData
        }
      ]
    };
  }

  async getNukeTypeCounts(): Promise<SeriesData[]> {
    const keys = await getCurrentDB().nukeDrops.orderBy('type_id').uniqueKeys();
    return Promise.all(keys.map(async (value) => {
      const uniqueId = value as string;
      const name = (await getCurrentDB().nukeTypes.get(uniqueId)).name ?? "Error";
      const count = await getCurrentDB().nukeDrops.where("type_id").equals(uniqueId).count();
      return {
        name: name,
        value: count
      } as SeriesData;
    }));
  }

}
