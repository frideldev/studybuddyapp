import { Injectable } from '@angular/core';
import { AnalyticsData, AnalyticsCard } from '../models/analytics.model';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private mockData: AnalyticsData = {
    studyStreak: {
      days: 12,
      icon: 'flame',
      label: 'Study Streak'
    },
    completionRate: {
      percentage: 85,
      icon: 'checkmark-circle',
      label: 'Completion Rate'
    },
    totalHours: {
      hours: 42.5,
      icon: 'time',
      label: 'Total Hours'
    }
  };

  GET_ANALYTICS_DATA(): AnalyticsData {
    return this.mockData;
  }

  GET_STUDY_STREAK_CARD(): AnalyticsCard {
    const data = this.mockData.studyStreak;
    return {
      icon: data.icon,
      value: `${data.days} days`,
      label: data.label,
      type: 'streak'
    };
  }
}