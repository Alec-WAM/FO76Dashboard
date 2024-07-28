import { Component } from '@angular/core';
import { liveQuery } from 'dexie';
import moment from 'moment';
import { Fo76Service } from '../../../services/fo76.service';

interface NukeStats {
  nukesThisWeek: number;
}

@Component({
  selector: 'app-nuke-stats',
  templateUrl: './nuke-stats.component.html',
  styleUrl: './nuke-stats.component.scss'
})
export class NukeStatsComponent {

  nukeStats$ = liveQuery(() => this.getThisWeeksNukesCount());

  constructor(public fo76Service: Fo76Service){}

  async getThisWeeksNukesCount(): Promise<NukeStats> {
    const now = moment();

    const collection_dates = this.fo76Service.getCurrentDB().nukeDrops.orderBy('date');
    const thisWeekCount = await collection_dates.filter((drop) => {
      if(!drop.date){
        return false;
      }
      const dropMoment = moment(drop.date);
      return dropMoment.isSame(now, 'week');
    }).count();

    // const keys = await getCurrentDB().nukeDrops.orderBy('type_id').uniqueKeys();
    // const collection_types = keys.map((key) => {
    //   return getCurrentDB().nukeTypes.get(key as string);
    // });

    return {
      nukesThisWeek: thisWeekCount
    }
  }

}
