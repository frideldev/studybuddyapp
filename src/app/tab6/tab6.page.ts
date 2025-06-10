import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ThemeService } from '../../services/theme.service';

import { addIcons } from 'ionicons';
import {
  settingsOutline,
  sunnyOutline,
  moonOutline
} from 'ionicons/icons';

addIcons({
  settingsOutline,
  sunnyOutline,
  moonOutline
});

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class Tab6Page {
  selectedTheme: 'light' | 'dark' | 'system' = 'system';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.selectedTheme = this.themeService.getUserPreference();
  }

  onThemeChange(theme: string) {
    this.selectedTheme = theme as 'light' | 'dark' | 'system';

    if (theme === 'system') {
      this.themeService.clearUserPreference();
    } else {
      this.themeService.setUserTheme(theme as 'light' | 'dark');
    }
  }
}
