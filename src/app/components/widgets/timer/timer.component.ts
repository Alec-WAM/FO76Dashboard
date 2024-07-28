import { Component, OnInit, inject, input, output, signal } from '@angular/core';
import { Observable, interval, map, startWith } from 'rxjs';
import { NukeSilo } from '../../../models/NukeCounterModels';
import * as moment from 'moment';
import { Fo76Service } from '../../../services/fo76.service';

export enum TimerType {
  NUKE = "Nuke",
  EVENT = "Event"
}

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent implements OnInit {  

  fo76Service = inject(Fo76Service);

  timerType = input.required<TimerType>();
  timerName = input.required<string>();
  silo = input<NukeSilo>();

  timerDate: moment.Moment;
  timeLeft$: Observable<string>;

  expired = output();

  constructor(){
    // this.timerId$.subscribe(async (newTimer) => {
    //   this.timer = await this.timerService.getTimer(newTimer);
    //   this.calcDateDiff();
    // });
    // this.timerService.timerAdded.subscribe(async (addedTimer) => {
    //   if(addedTimer === this.timerId()){
    //     this.timer = await this.timerService.getTimer(addedTimer);
    //     this.calcDateDiff();
    //   }
    // });
  }

  ngOnInit(): void {
    if(this.timerType() === TimerType.NUKE){
      if(this.silo()){
        const date = this.fo76Service.getNukeTimer(this.silo());
        if(date){
          const now = moment.utc();
          const loadedDate = moment.utc(date);
          if(now.isBefore(loadedDate)) {
            this.timerDate = loadedDate;
          }
          else {
            this.timerDate = undefined;
          }
        }
        else {
          this.timerDate = undefined;
        }
      }
    }
    this.timeLeft$ = interval(1000).pipe(
      startWith(0),
      map(x => this.calcDateDiff())
    );
  }

  toggleTimer(): void {
    //TODO Toggle timer
    console.log("Toggle Timer")
    const now = moment.utc();
    if(!this.timerDate){
      console.log("Enabling Timer")
      if(this.timerType() === TimerType.NUKE){
        console.log("Nuke timer")
        this.timerDate = now.add(30, 'seconds');
        this.fo76Service.setNukeTimer(this.silo(), this.timerDate.toISOString());
      }
    }
    else {
      console.log("Clearing")
      if(this.timerType() === TimerType.NUKE){
        this.fo76Service.setNukeTimer(this.silo(), undefined);
      }      
      this.timerDate = undefined;
    }
  }

  calcDateDiff(): string {
    if(this.timerDate){
      const now = moment.now();
      // const timer = moment.utc(this.timerDate)
      const diff = this.timerDate.diff(now);
      if(diff <= 0){
        if(this.timerType() === TimerType.NUKE){
          this.fo76Service.setNukeTimer(this.silo(), undefined);
        }
        this.timerDate = undefined;
        this.expired.emit();
        return "00:00:00";
      }
      return moment.utc(diff).format("HH:mm:ss")
    }
    return "00:00:00";
  }

}
