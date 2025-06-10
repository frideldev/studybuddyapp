import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

interface StudySession {
  id: string;
  subject: string;
  date: Date;
  duration: number; // in minutes
  tasksCompleted: number;
  focusScore: number; // percentage
  icon: string;
}

interface StudyGoal {
  id: string;
  title: string;
  target: number;
  current: number;
  unit: string;
  deadline?: Date;
  priority: 'low' | 'medium' | 'high';
}

interface ProgressMetrics {
  studyTime: {
    value: string;
    change: string;
    trend: 'up' | 'down' | 'stable';
  };
  tasksCompleted: {
    value: number;
    change: string;
    trend: 'up' | 'down' | 'stable';
  };
  streak: {
    value: number;
    change: string;
    trend: 'up' | 'down' | 'stable';
  };
  efficiency: {
    value: string;
    change: string;
    trend: 'up' | 'down' | 'stable';
  };
}

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class Tab4Page {
  // Current time period for analytics
  selectedPeriod: 'week' | 'month' | 'year' = 'week';
  selectedChartPeriod: 'week' | 'month' | 'year' = 'week';

  // Progress metrics
  progressMetrics: ProgressMetrics = {
    studyTime: {
      value: '24h',
      change: '+12% this week',
      trend: 'up'
    },
    tasksCompleted: {
      value: 15,
      change: '+3 from last week',
      trend: 'up'
    },
    streak: {
      value: 7,
      change: 'Personal best!',
      trend: 'up'
    },
    efficiency: {
      value: '92%',
      change: '+5% improvement',
      trend: 'up'
    }
  };

  // Study goals
  studyGoals: StudyGoal[] = [
    {
      id: '1',
      title: 'Study 25 hours this week',
      target: 25,
      current: 24,
      unit: 'hours',
      priority: 'high'
    },
    {
      id: '2',
      title: 'Complete 20 tasks',
      target: 20,
      current: 15,
      unit: 'tasks',
      priority: 'medium'
    },
    {
      id: '3',
      title: 'Maintain 10-day streak',
      target: 10,
      current: 7,
      unit: 'days',
      priority: 'medium'
    }
  ];

  // Recent study sessions
  studySessions: StudySession[] = [
    {
      id: '1',
      subject: 'Calculus II - Derivatives',
      date: new Date(),
      duration: 150, // 2h 30m
      tasksCompleted: 8,
      focusScore: 95,
      icon: 'calculator'
    },
    {
      id: '2',
      subject: 'Chemistry Lab Report',
      date: new Date(Date.now() - 24 * 60 * 60 * 1000), // yesterday
      duration: 105, // 1h 45m
      tasksCompleted: 3,
      focusScore: 88,
      icon: 'flask'
    },
    {
      id: '3',
      subject: 'Literature Essay',
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      duration: 195, // 3h 15m
      tasksCompleted: 5,
      focusScore: 91,
      icon: 'book'
    }
  ];

  constructor() {
    this.INITIALIZE_DATA();
  }

  INITIALIZE_DATA() {
    console.log('Initializing analytics data...');
    this.CALCULATE_METRICS();
    this.SORT_SESSIONS_BY_DATE();
  }

  CALCULATE_METRICS() {
    // Calculate progress metrics based on current data
    const totalStudyTime = this.studySessions.reduce((total, session) => total + session.duration, 0);
    const averageFocus = this.studySessions.reduce((total, session) => total + session.focusScore, 0) / this.studySessions.length;
    
    console.log(`Total study time: ${totalStudyTime} minutes`);
    console.log(`Average focus: ${averageFocus.toFixed(1)}%`);
  }

  SORT_SESSIONS_BY_DATE() {
    this.studySessions.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  // Period selection methods
  SET_PERIOD(period: 'week' | 'month' | 'year') {
    this.selectedPeriod = period;
    console.log('Analytics period changed to:', period);
    this.REFRESH_ANALYTICS();
  }

  SET_CHART_PERIOD(period: 'week' | 'month' | 'year') {
    this.selectedChartPeriod = period;
    console.log('Chart period changed to:', period);
    this.REFRESH_CHART_DATA();
  }

  // Chart control methods
  SELECT_CHART_CONTROL(control: string) {
    console.log('Chart control selected:', control);
    this.SET_CHART_PERIOD(control as 'week' | 'month' | 'year');
  }

  // Goal management methods
  ADD_GOAL() {
    console.log('Adding new goal...');
    // In a real app, this would open a modal or navigate to a goal creation page
    const newGoal: StudyGoal = {
      id: Date.now().toString(),
      title: 'New Study Goal',
      target: 10,
      current: 0,
      unit: 'hours',
      priority: 'medium'
    };
    this.studyGoals.push(newGoal);
  }

  UPDATE_GOAL(goalId: string, progress: number) {
    const goal = this.studyGoals.find(g => g.id === goalId);
    if (goal) {
      goal.current = Math.min(progress, goal.target);
      console.log(`Goal ${goalId} updated. Progress: ${goal.current}/${goal.target}`);
    }
  }

  DELETE_GOAL(goalId: string) {
    this.studyGoals = this.studyGoals.filter(g => g.id !== goalId);
    console.log('Goal deleted:', goalId);
  }

  GET_GOAL_PROGRESS_PERCENTAGE(goal: StudyGoal): number {
    return Math.round((goal.current / goal.target) * 100);
  }

  GET_GOAL_PROGRESS_CLASS(goal: StudyGoal): string {
    const percentage = this.GET_GOAL_PROGRESS_PERCENTAGE(goal);
    if (percentage >= 80) return 'high-progress';
    if (percentage >= 50) return 'medium-progress';
    return 'low-progress';
  }

  // Session management methods
  VIEW_SESSION_DETAILS(sessionId: string) {
    console.log('Viewing session details:', sessionId);
    // In a real app, this would navigate to a detailed session view
  }

  VIEW_ALL_SESSIONS() {
    console.log('Viewing all sessions...');
    // Navigate to a comprehensive sessions list
  }

  // Data refresh methods
  REFRESH_ANALYTICS() {
    console.log('Refreshing analytics for period:', this.selectedPeriod);
    // In a real app, this would fetch updated data from a service
    this.CALCULATE_METRICS();
  }

  REFRESH_CHART_DATA() {
    console.log('Refreshing chart data for period:', this.selectedChartPeriod);
    // In a real app, this would update chart data
  }

  // Utility methods
  FORMAT_DURATION(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  }

  FORMAT_SESSION_DATE(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return 'Today';
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else {
      return `${diffDays} days ago`;
    }
  }

  GET_TREND_ICON(trend: 'up' | 'down' | 'stable'): string {
    switch (trend) {
      case 'up':
        return 'trending-up';
      case 'down':
        return 'trending-down';
      default:
        return 'remove';
    }
  }

  GET_TREND_COLOR(trend: 'up' | 'down' | 'stable'): string {
    switch (trend) {
      case 'up':
        return 'success';
      case 'down':
        return 'danger';
      default:
        return 'medium';
    }
  }

  // Export and sharing methods
  EXPORT_ANALYTICS() {
    console.log('Exporting analytics data...');
    // In a real app, this would generate and download a report
  }

  SHARE_PROGRESS() {
    console.log('Sharing progress...');
    // In a real app, this would open sharing options
  }

  // Component lifecycle
  ionViewWillEnter() {
    console.log('Tab 4 - Analytics: View will enter');
    this.REFRESH_ANALYTICS();
  }

  ionViewDidEnter() {
    console.log('Tab 4 - Analytics: View did enter');
    // Any additional setup after view enters
  }
}