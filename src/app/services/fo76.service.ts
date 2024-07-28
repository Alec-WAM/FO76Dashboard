import { Injectable, signal } from '@angular/core';
import { NukeData, NukeSilo } from '../models/NukeCounterModels';
import { toObservable } from '@angular/core/rxjs-interop';
import { ItemGoal } from '../models/ItemGoalModels';
import { AppDB, db, db_test } from './db';
import { Subject } from 'rxjs';
import { NukeTimers } from '../models/NukeTimerModels';

export const FO_76_DASHBOARD_STORAGE: string = "fo-76-dashboard";
export const DATA_VERSION: number = 1;
export const NUKE_TRACKER_VERSION: number = 1;

export const STORAGE_NUKE_TIMER = "NukeTimers";

@Injectable({
  providedIn: 'root'
})
export class Fo76Service {

  addNukeDialogOpen = signal<boolean>(false);
  addNukeDialogOpen$ = toObservable(this.addNukeDialogOpen);

  editGoal: ItemGoal;
  copyGoal: ItemGoal;
  addGoalDialogOpen = signal<boolean>(false);
  addGoalDialogOpen$ = toObservable(this.addGoalDialogOpen);

  nukeTimers: NukeTimers;

  initService = new Subject<void>();

  constructor() { }

  init(): void {
    console.log("Init FO76")
    if(localStorage.getItem('fo-76-dashboard-test-db') == null){
      localStorage.setItem('fo-76-dashboard-test-db', 'false');
    }
    if(localStorage.getItem(STORAGE_NUKE_TIMER) != null){
      this.nukeTimers = JSON.parse(localStorage.getItem(STORAGE_NUKE_TIMER));
    }
    else {
      const newTimers = {
        siloA: undefined,
        siloB: undefined,
        siloC: undefined
      } as NukeTimers;
      this.nukeTimers = newTimers;
      this.saveNukeTimers();
    }
    this.initService.next();
  }
  
  isUsingTestDB(): boolean {
    return (localStorage.getItem('fo-76-dashboard-test-db') ?? 'false') === 'true';
  }

  setUsingTestDB(value: boolean): void {
    localStorage.setItem('fo-76-dashboard-test-db', value ? 'true' : 'false');
  }

  getCurrentDB(): AppDB {
    return this.isUsingTestDB() ? db_test : db;
  }

  //Nuke Timers
  saveNukeTimers(): void {
    const nukeTimersJSON = JSON.stringify(this.nukeTimers);
    console.log(nukeTimersJSON)
    localStorage.setItem(STORAGE_NUKE_TIMER, nukeTimersJSON);
  }

  getNukeTimer(silo: NukeSilo): string {
    switch(silo) {
      case NukeSilo.SILO_A: {
        return this.nukeTimers.siloA;
      }
      case NukeSilo.SILO_B: {
        return this.nukeTimers.siloB;
      }
      case NukeSilo.SILO_C: {
        return this.nukeTimers.siloC;
      }
    }
  }

  setNukeTimer(silo: NukeSilo, date: string): void {
    switch(silo) {
      case NukeSilo.SILO_A: {
        this.nukeTimers.siloA = date;
        break;
      }
      case NukeSilo.SILO_B: {
        this.nukeTimers.siloB = date;
        break;
      }
      case NukeSilo.SILO_C: {
        this.nukeTimers.siloC = date;
        break;
      }
    }
    this.saveNukeTimers();
  }
}
