import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { NukeCounterComponent } from './components/widgets/nuke-counter/nuke-counter.component';
import { Fo76Service } from './services/fo76.service';
import { ThemeService } from './services/theme.service';
import { HeaderComponent } from './components/header/header.component';
import { NukePageComponent } from './components/pages/nuke-page/nuke-page.component';
import { EventPageComponent } from './components/pages/event-page/event-page.component';
import { GoalsPageComponent } from './components/pages/goals-page/goals-page.component';
import { MomentDatePipe } from './pipes/moment-date.pipe';
import { AddNukeDialogComponent } from './components/dialogs/add-nuke-dialog/add-nuke-dialog.component';
import { NukeStatsComponent } from './components/widgets/nuke-stats/nuke-stats.component';

function initializeApp(service: Fo76Service) {
  return () => {
    service.init();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NukeCounterComponent,
    HeaderComponent,
    NukePageComponent,
    EventPageComponent,
    GoalsPageComponent,
    MomentDatePipe,
    AddNukeDialogComponent,
    NukeStatsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink, 
    RouterLinkActive,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    ButtonModule,
    TabMenuModule,
    DialogModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    MultiSelectModule,
    TableModule,
    PaginatorModule,

    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [
    Fo76Service,
    ThemeService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [Fo76Service],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
