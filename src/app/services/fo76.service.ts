import { Injectable, signal } from '@angular/core';
import { NukeData } from '../models/NukeCounterModels';
import { db_test } from './db';
import { toObservable } from '@angular/core/rxjs-interop';

export const FO_76_DASHBOARD_STORAGE: string = "fo-76-dashboard";
export const DATA_VERSION: number = 1;
export const NUKE_TRACKER_VERSION: number = 1;

export interface FO76DashboardData {
  dataVersion: 1;
  nukeData: NukeData;
}

@Injectable({
  providedIn: 'root'
})
export class Fo76Service {

  appData: FO76DashboardData;

  addNukeDialogOpen = signal<boolean>(false);
  addNukeDialogOpen$ = toObservable(this.addNukeDialogOpen);

  constructor() { }

  init(): void {
    console.log("Init FO76")
  }
}
