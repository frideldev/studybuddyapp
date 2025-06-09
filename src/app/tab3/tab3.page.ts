import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class Tab3Page {
  tabThreeContent: any = {};
  selectedOption: string = '';
  isActive: boolean = true;

  constructor() { }

  LOAD_CONTENT() {
    // Load content
  }

  FILTER_DATA() {
    // Filter data
  }

  EXPORT_RESULTS() {
    // Export results
  }

  REFRESH_VIEW() {
    // Refresh view
  }
}
