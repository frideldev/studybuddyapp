import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonList, IonAvatar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonList, IonAvatar, RouterLink, CommonModule],
})
export class HomePage {
  userName = 'Alex';
  currentDate = 'Thursday, May 15';
  
  stats = [
    { title: 'Tasks Completed', value: '7/12', color: 'primary', progress: 58 },
    { title: 'Study Hours', value: '4.5h', color: 'secondary', progress: 75 },
    { title: 'Courses', value: '5', color: 'tertiary', progress: 100 }
  ];

  quote = '"The beautiful thing about learning is that no one can take it away from you."';

  upcomingAssignments = [
    { title: 'Term paper', subject: 'Due tomorrow', color: 'danger' },
    { title: 'Problem set 3', subject: 'Due in 3 days', color: 'warning' },
    { title: 'Lab Report', subject: 'Due in 5 days', color: 'medium' }
  ];

  upcomingEvents = [
    { title: 'Group Study Session', time: 'Tomorrow, 2:00 PM', color: 'success' },
    { title: 'Office Hours', time: 'Friday, 3:00 PM', color: 'primary' }
  ];

  studyBuddies = [
    { name: 'Sarah', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Mike', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Emma', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'John', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' }
  ];

  constructor() {}

  addTask() {
    // Implementar funcionalidad para agregar tarea
    console.log('Add task clicked');
  }

  navigateToTabs() {
    // Navegar a tabs si es necesario
  }
}