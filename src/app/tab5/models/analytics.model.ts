export interface AnalyticsData {
  studyStreak: {
    days: number;
    icon: string;
    label: string;
  };
  completionRate: {
    percentage: number;
    icon: string;
    label: string;
  };
  totalHours: {
    hours: number;
    icon: string;
    label: string;
  };
}

export interface AnalyticsCard {
  icon: string;
  value: string;
  label: string;
  type: 'streak' | 'percentage' | 'hours';
}