import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Theme, ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  Theme = Theme;
  
  items: MenuItem[] | undefined;

  constructor(public themeService: ThemeService, private router: Router) {}

  ngOnInit() {
    this.items = [
        { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard' },
        { label: 'Nukes', icon: 'pi pi-bullseye', routerLink: '/nukes' },
        { label: 'Events', icon: 'pi pi-calendar-clock', routerLink: '/events' },
        { label: 'Goals', icon: 'pi pi-wrench', routerLink: '/goals' }
    ];
}
}
