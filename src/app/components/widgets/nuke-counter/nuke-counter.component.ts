import { Component, Input, ViewEncapsulation } from '@angular/core';
import { liveQuery } from 'dexie';
import { Fo76Service } from '../../../services/fo76.service';

@Component({
  selector: 'app-nuke-counter',
  templateUrl: './nuke-counter.component.html',
  styleUrl: './nuke-counter.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NukeCounterComponent{
  
  @Input('showButton') showButton = true;
  
  nukeCount$ = liveQuery(() => this.fo76Service.getCurrentDB().nukeDrops.count());

  constructor(public fo76Service: Fo76Service){}

  openAddNuke(): void {
    this.fo76Service.addNukeDialogOpen.set(true);
  }
}
