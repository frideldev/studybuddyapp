import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  standalone: true,
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule]
})
export class Tab3Page {
  studyGroups = [
    {
      title: 'Calculus Study Group',
      subject: 'MATH 201',
      image: 'assets/group1.jpg',
      active: 'Active 2 hours ago',
      members: 5
    },
    {
      title: 'Physics Lab Partners',
      subject: 'PHYS 101',
      image: 'assets/group2.jpg',
      active: 'Active Yesterday',
      members: 3
    },
    {
      title: 'Programming Project Team',
      subject: 'MATH 201',
      image: 'assets/group3.jpg',
      active: 'Active just now',
      members: 4
    }
  ];
}