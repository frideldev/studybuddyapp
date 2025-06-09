import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class Tab5Page {
  tabFiveSettings: any = {};
  userPreferences: any = {};
  isDarkMode: boolean = false;

  constructor() { }

  CONFIGURE_SETTINGS() {
    // Configure settings
  }

  SAVE_PREFERENCES() {
    // Save preferences
  }

  RESET_DEFAULTS() {
    // Reset defaults
  }

  APPLY_CHANGES() {
    // Apply changes
  }
}
