import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StatCardComponent } from '../components/atoms/stat-card/stat-card.component';
import { AnalyticsCardComponent } from '../components/atoms/analytics-card/analytics-card.component';
import { ChartComponent } from '../components/atoms/chart/chart.component';

interface StudySession {
  date: string;
  duration: number;
  subject: string;
  completed: boolean;
}

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    StatCardComponent,
    AnalyticsCardComponent,
    ChartComponent
  ]
})
export class Tab5Page implements OnInit {
  totalStudyHours: number = 42.5;
  completedSessions: number = 12;
  currentStreak: number = 5;
  weeklyGoal: number = 20;
  
  recentSessions: StudySession[] = [
    {
      date: '2025-06-09',
      duration: 120,
      subject: 'Mathematics',
      completed: true
    },
    {
      date: '2025-06-08', 
      duration: 90,
      subject: 'Physics',
      completed: true
    },
    {
      date: '2025-06-07',
      duration: 75,
      subject: 'Chemistry', 
      completed: false
    }
  ];

  weeklyChartData = [
    { label: 'Mon', value: 4.5 },
    { label: 'Tue', value: 6.2 },
    { label: 'Wed', value: 3.8 },
    { label: 'Thu', value: 7.1 },
    { label: 'Fri', value: 5.5 },
    { label: 'Sat', value: 4.2 },
    { label: 'Sun', value: 6.8 }
  ];

  subjectChartData = [
    { label: 'Math', value: 25 },
    { label: 'Physics', value: 18 },
    { label: 'Chemistry', value: 15 },
    { label: 'Biology', value: 13 }
  ];

  ngOnInit() {
    this.LOAD_ANALYTICS_DATA();
  }

  LOAD_ANALYTICS_DATA(): void {
    // Load analytics data
    console.log('Loading analytics data...');
  }

  GET_COMPLETION_PERCENTAGE(): number {
    return Math.round((this.totalStudyHours / this.weeklyGoal) * 100);
  }

  FORMAT_DURATION(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  }

  EXPORT_DATA(): void {
    console.log('Exporting analytics data...');
    // Implement export functionality
  }

  RESET_ANALYTICS(): void {
    console.log('Resetting analytics...');
    // Implement reset functionality
  }
}