import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Theme, ThemeService } from '../../services/theme.service';
import { Fo76Service } from '../../services/fo76.service';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  Theme = Theme;
  
  items: MenuItem[] | undefined;
  usingTestDB = signal<boolean>(false);
  usingTestDB$ = toObservable(this.usingTestDB);

  constructor(public fo76Service: Fo76Service, public themeService: ThemeService, private router: Router) {
    this.usingTestDB$.subscribe((value) => {
      if(value !== this.fo76Service.isUsingTestDB()){
        this.fo76Service.setUsingTestDB(value);
      }
    });
  }

  ngOnInit() {
    this.usingTestDB.set(this.fo76Service.isUsingTestDB());
    this.items = [
        { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard' },
        { label: 'Nukes', icon: 'pi pi-bullseye', routerLink: '/nukes' },
        { label: 'Events', icon: 'pi pi-calendar-clock', routerLink: '/events' },
        { label: 'Goals', icon: 'pi pi-wrench', routerLink: '/goals' }
    ];
  }
}
