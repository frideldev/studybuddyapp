import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class Tab4Page {
  tabFourData: any = {};
  displayMode: string = 'list';
  totalCount: number = 0;

  constructor() { }

  INITIALIZE_DATA() {
    // Initialize data
  }

  SORT_ITEMS() {
    // Sort items
  }

  SEARCH_CONTENT() {
    // Search content
  }

  TOGGLE_VIEW() {
    // Toggle view
  }
}
