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
  groups = [
    {
      title: 'Calculus Study Group',
      course: 'MATH 201',
      members: 5,
      image: 'assets/images/group1.jpg',
      activeStatus: 'Active 2 hours ago',
    },
    {
      title: 'Physics Lab Partners',
      course: 'PHYS 101',
      members: 3,
      image: 'assets/images/group2.jpg',
      activeStatus: 'Active Yesterday',
    },
    {
      title: 'Programming Project Team',
      course: 'MATH 201',
      members: 4,
      image: 'assets/images/group3.jpg',
      activeStatus: 'Active Just now',
    },
  ];

  selectedOption: string = '';
  isActive: boolean = true;

  constructor() {}

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
