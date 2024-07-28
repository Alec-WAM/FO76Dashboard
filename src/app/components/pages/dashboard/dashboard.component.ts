import { Component } from '@angular/core';
import { TimerType } from '../../widgets/timer/timer.component';
import { NukeSilo } from '../../../models/NukeCounterModels';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  TimerType = TimerType;
  NukeSilo = NukeSilo;
}
