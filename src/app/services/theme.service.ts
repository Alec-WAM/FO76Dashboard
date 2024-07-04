import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

export enum Theme {
  LIGHT = "light-theme",
  DARK = "dark-theme"
}

export const THEME_KEY = "fo76-dashboard-theme";

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme = signal<Theme>(Theme.LIGHT);
  currentTheme$ = toObservable(this.currentTheme);

  constructor(){
    let savedTheme = localStorage.getItem(THEME_KEY);
    if(savedTheme == null){
      savedTheme = Theme.LIGHT;
    }
    this.setTheme(savedTheme as Theme);
  }

  switchTheme(): void {
    if(this.currentTheme() === Theme.LIGHT){
      this.setTheme(Theme.DARK);
    }
    else if(this.currentTheme() === Theme.DARK){
      this.setTheme(Theme.LIGHT);
    }
  }

  setTheme(theme: Theme, updateSettings: boolean = true) {
    const lastTheme = this.currentTheme();
    this.currentTheme.set(theme);
    document.body.classList.remove(lastTheme);
    document.body.classList.add(theme);
    this.setBodyTheme(theme);
    if(updateSettings){
      localStorage.setItem(THEME_KEY, theme);
    }
  }

  getTheme(): Theme {
    return this.currentTheme();
  }

  setBodyTheme(theme: string): void {
    const themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    if(themeLink){
      themeLink.href = theme + ".css";
    }
  }
}