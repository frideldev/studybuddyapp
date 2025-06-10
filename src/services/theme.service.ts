import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private storageKey = 'user-theme';

  constructor() {
    this.applyTheme(this.getEffectiveTheme());

    // Escucha cambios del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!this.hasUserPreference()) {
        this.applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  initializeTheme(): void {
    this.applyTheme(this.getEffectiveTheme());
  }

  private hasUserPreference(): boolean {
    return localStorage.getItem(this.storageKey) !== null;
  }

  private getSystemTheme(): 'dark' | 'light' {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  public getEffectiveTheme(): 'dark' | 'light' {
    const stored = localStorage.getItem(this.storageKey);
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
    return this.getSystemTheme();
  }

  public getUserPreference(): 'dark' | 'light' | 'system' {
    const stored = localStorage.getItem(this.storageKey);
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
    return 'system';
  }

  public async applyTheme(theme: 'dark' | 'light'): Promise<void> {
    const isDark = theme === 'dark';

    document.documentElement.classList.remove('ion-palette-dark', 'ion-palette-light');
    document.documentElement.classList.add(isDark ? 'ion-palette-dark' : 'ion-palette-light');

    if (Capacitor.isNativePlatform()) {
      try {
        await StatusBar.setOverlaysWebView({ overlay: false });
        await StatusBar.setBackgroundColor({ color: isDark ? '#000000' : '#ffffff' });
        await StatusBar.setStyle({ style: isDark ? Style.Dark : Style.Light });
      } catch (error) {
        console.warn('StatusBar error:', error);
      }
    }
  }

  public setUserTheme(theme: 'dark' | 'light'): void {
    localStorage.setItem(this.storageKey, theme);
    this.applyTheme(theme);
  }

  public clearUserPreference(): void {
    localStorage.removeItem(this.storageKey);
    this.applyTheme(this.getSystemTheme());
  }
}