import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class Tab2Page {
  tabTwoInfo: any = {};
  currentState: string = '';
  hasChanges: boolean = false;

  constructor() { }

  SETUP_COMPONENT() {
    // Setup component
  }

  VALIDATE_INPUT() {
    // Validate input
  }

  UPDATE_STATE() {
    // Update state
  }

  CLEAR_DATA() {
    // Clear data
  }
}
