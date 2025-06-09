import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

interface Group {
  title: string;
  course: string;
  members: number;
  image: string;
  activeStatus: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class Tab3Page implements OnInit {
  groups: Group[] = [];

  showCreateForm = false;

  newGroup: Group = {
    title: '',
    course: '',
    members: 0,
    image: '',
    activeStatus: '',
  };

  constructor() {}

  ngOnInit() {
    this.loadGroups();
  }

  loadGroups() {
    this.groups = [
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
  }

  toggleForm() {
    this.showCreateForm = !this.showCreateForm;
  }

  addGroup() {
    this.groups.push({ ...this.newGroup });
    this.resetForm();
    this.toggleForm();
  }

  resetForm() {
    this.newGroup = {
      title: '',
      course: '',
      members: 0,
      image: '',
      activeStatus: '',
    };
  }
}
