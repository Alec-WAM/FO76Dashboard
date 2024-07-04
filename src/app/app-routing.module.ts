import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { NukePageComponent } from './components/pages/nuke-page/nuke-page.component';
import { EventPageComponent } from './components/pages/event-page/event-page.component';
import { GoalsPageComponent } from './components/pages/goals-page/goals-page.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'nukes', component: NukePageComponent },
  { path: 'events', component: EventPageComponent },
  { path: 'goals', component: GoalsPageComponent },
  { path: '',  redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
