import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent { 
  constructor(
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    // FORZAR tema oscuro por defecto
    this.forceDarkTheme();
    this.themeService.initializeTheme();
  }

  private forceDarkTheme() {
    // Agregar clase dark a documentElement
    document.documentElement.classList.add('ion-palette-dark');
    
    // FORZAR body dark
    document.body.classList.add('dark');
    document.body.style.background = '#121212';
    document.body.style.color = '#ffffff';
    
    // Agregar clase personalizada
    document.documentElement.classList.add('sb-dark-force');
    
    // FORZAR meta theme-color
    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme) {
      metaTheme = document.createElement('meta');
      metaTheme.setAttribute('name', 'theme-color');
      document.head.appendChild(metaTheme);
    }
    metaTheme.setAttribute('content', '#121212');
  }
}