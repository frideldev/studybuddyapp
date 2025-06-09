// src/app/components/molecules/study-time-content/study-time-content.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ChartComponent } from '../../atoms/chart/chart.component';

interface StudySession {
  subject: string;
  duration: number;
  timestamp: Date;
  efficiency: number;
}

interface DailyGoal {
  target: number;
  completed: number;
  percentage: number;
}

@Component({
  selector: 'app-study-time-content',
  standalone: true,
  imports: [CommonModule, IonicModule, ChartComponent],
  template: `
    <div class="study-time-container">
      <!-- Daily Goal Progress -->
      <div class="goal-section">
        <h3>Today's Goal</h3>
        <div class="progress-circle">
          <div class="circle-progress" [style.--progress]="dailyGoal.percentage + '%'">
            <div class="progress-content">
              <span class="progress-time">{{ dailyGoal.completed }}h</span>
              <span class="progress-target">of {{ dailyGoal.target }}h</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Study Sessions Today -->
      <div class="sessions-section">
        <h3>Today's Sessions</h3>
        <div class="sessions-list">
          <div 
            *ngFor="let session of todaySessions" 
            class="session-item">
            <div class="session-info">
              <span class="session-subject">{{ session.subject }}</span>
              <span class="session-time">{{ GET_TIME_AGO(session.timestamp) }}</span>
            </div>
            <div class="session-stats">
              <span class="session-duration">{{ session.duration }}min</span>
              <div class="efficiency-badge" [class]="GET_EFFICIENCY_CLASS(session.efficiency)">
                {{ session.efficiency }}%
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Weekly Study Chart -->
      <app-chart
        title="This Week's Study Time"
        [data]="weeklyData"
        barColor="#3880ff">
      </app-chart>

      <!-- Study Stats -->
      <div class="stats-grid">
        <div class="stat-card">
          <ion-icon name="flame-outline" color="danger"></ion-icon>
          <div class="stat-content">
            <span class="stat-value">{{ currentStreak }}</span>
            <span class="stat-label">Day Streak</span>
          </div>
        </div>
        
        <div class="stat-card">
          <ion-icon name="time-outline" color="primary"></ion-icon>
          <div class="stat-content">
            <span class="stat-value">{{ averageSession }}min</span>
            <span class="stat-label">Avg Session</span>
          </div>
        </div>
        
        <div class="stat-card">
          <ion-icon name="trophy-outline" color="warning"></ion-icon>
          <div class="stat-content">
            <span class="stat-value">{{ totalHours }}h</span>
            <span class="stat-label">This Month</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./study-time-content.component.scss']
})
export class StudyTimeContentComponent implements OnInit {
  dailyGoal: DailyGoal = {
    target: 6,
    completed: 4.2,
    percentage: 70
  };

  todaySessions: StudySession[] = [
    {
      subject: 'Mathematics',
      duration: 45,
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      efficiency: 92
    },
    {
      subject: 'Physics',
      duration: 90,
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      efficiency: 87
    },
    {
      subject: 'Chemistry',
      duration: 60,
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      efficiency: 95
    }
  ];

  weeklyData = [
    { label: 'Mon', value: 4.5 },
    { label: 'Tue', value: 6.2 },
    { label: 'Wed', value: 3.8 },
    { label: 'Thu', value: 7.1 },
    { label: 'Fri', value: 5.5 },
    { label: 'Sat', value: 4.2 },
    { label: 'Sun', value: 6.8 }
  ];

  currentStreak = 12;
  averageSession = 65;
  totalHours = 142;

  ngOnInit() {
    this.CALCULATE_DAILY_PROGRESS();
  }

  private CALCULATE_DAILY_PROGRESS(): void {
    const totalMinutes = this.todaySessions.reduce(
      (sum, session) => sum + session.duration, 0
    );
    this.dailyGoal.completed = Math.round((totalMinutes / 60) * 10) / 10;
    this.dailyGoal.percentage = Math.round(
      (this.dailyGoal.completed / this.dailyGoal.target) * 100
    );
  }

  GET_TIME_AGO(timestamp: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - timestamp.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    
    if (diffHours < 1) {
      const diffMinutes = Math.floor(diffMs / (1000 * 60));
      return `${diffMinutes}m ago`;
    }
    return `${diffHours}h ago`;
  }

  GET_EFFICIENCY_CLASS(efficiency: number): string {
    if (efficiency >= 90) return 'high';
    if (efficiency >= 75) return 'medium';
    return 'low';
  }
}