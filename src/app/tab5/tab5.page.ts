// Actualizar: tab5/tab5.page.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AnalyticsCard } from './models/analytics.model';
import { AnalyticsService } from './services/analytics.service';
import { AnalyticsCardComponent } from './components/molecules/analytics-card/analytics-card.component';

interface StudySession {
  date: string;
  duration: number;
  subject: string;
  completed: boolean;
}

interface WeeklyData {
  week: string;
  hours: number;
  sessions: number;
}

interface SubjectData {
  name: string;
  hours: number;
  color: string;
  percentage: number;
}

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    AnalyticsCardComponent
  ]
})
export class Tab5Page implements OnInit {
  studyStreakCard!: AnalyticsCard;

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.LOAD_ANALYTICS_DATA();
  }

  private LOAD_ANALYTICS_DATA(): void {
    this.studyStreakCard = this.analyticsService.GET_STUDY_STREAK_CARD();
export class Tab5Page {
  totalStudyHours: number = 0;
  weeklyGoal: number = 0;
  completedSessions: number = 0;
  currentStreak: number = 0;
  
  recentSessions: StudySession[] = [];
  weeklyProgress: WeeklyData[] = [];
  subjectDistribution: SubjectData[] = [];
  
  constructor() {
    this.LOAD_ANALYTICS_DATA();
  }

  LOAD_ANALYTICS_DATA(): void {
    this.GENERATE_FAKE_DATA();
    this.CALCULATE_STATISTICS();
  }

  GENERATE_FAKE_DATA(): void {
    // Generate fake recent sessions
    this.recentSessions = [
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
      },
      {
        date: '2025-06-06',
        duration: 135,
        subject: 'Biology',
        completed: true
      },
      {
        date: '2025-06-05',
        duration: 60,
        subject: 'Mathematics',
        completed: true
      }
    ];

    // Generate fake weekly progress
    this.weeklyProgress = [
      { week: 'Week 1', hours: 12, sessions: 8 },
      { week: 'Week 2', hours: 15, sessions: 10 },
      { week: 'Week 3', hours: 18, sessions: 12 },
      { week: 'Week 4', hours: 14, sessions: 9 }
    ];

    // Generate fake subject distribution
    this.subjectDistribution = [
      {
        name: 'Mathematics',
        hours: 25,
        color: '#3880ff',
        percentage: 35
      },
      {
        name: 'Physics',
        hours: 18,
        color: '#10dc60',
        percentage: 25
      },
      {
        name: 'Chemistry',
        hours: 15,
        color: '#ffce00',
        percentage: 21
      },
      {
        name: 'Biology',
        hours: 13,
        color: '#f04141',
        percentage: 19
      }
    ];
  }

  CALCULATE_STATISTICS(): void {
    this.totalStudyHours = this.recentSessions
      .reduce((total, session) => total + session.duration, 0) / 60;
    
    this.weeklyGoal = 20;
    
    this.completedSessions = this.recentSessions
      .filter(session => session.completed).length;
    
    this.currentStreak = 5; // Fake streak data
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
    // Export analytics data
    console.log('Exporting analytics data...');
  }

  RESET_ANALYTICS(): void {
    // Reset analytics data
    console.log('Resetting analytics...');
  }
}