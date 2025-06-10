import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
  studyStats: {
    hoursStudied: number;
    dayStreak: number;
    tasksCompleted: number;
    coursesActive: number;
  };
}

interface Achievement {
  id: string;
  title: string;
  icon: string;
  description: string;
  isEarned: boolean;
  earnedDate?: Date;
  progress?: number;
  target?: number;
}

interface StudyPreference {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  isActive: boolean;
}

interface UserSettings {
  notifications: boolean;
  autoSync: boolean;
  darkMode: boolean;
  studyReminders: boolean;
  weeklyReports: boolean;
  groupNotifications: boolean;
}

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class Tab5Page {
  // User profile data
  userProfile: UserProfile = {
    name: 'Alex Johnson',
    email: 'alex.johnson@university.edu',
    studyStats: {
      hoursStudied: 156,
      dayStreak: 23,
      tasksCompleted: 89,
      coursesActive: 5
    }
  };

  // User settings
  userSettings: UserSettings = {
    notifications: true,
    autoSync: true,
    darkMode: true,
    studyReminders: true,
    weeklyReports: true,
    groupNotifications: false
  };

  // Study preferences
  studyPreferences: StudyPreference[] = [
    {
      id: 'night-owl',
      title: 'Night Owl',
      subtitle: 'Evening study',
      icon: 'moon',
      isActive: true
    },
    {
      id: 'early-bird',
      title: 'Early Bird',
      subtitle: 'Morning study',
      icon: 'sunny',
      isActive: false
    },
    {
      id: 'music-on',
      title: 'Music On',
      subtitle: 'With background music',
      icon: 'headset',
      isActive: false
    },
    {
      id: 'pomodoro',
      title: 'Pomodoro',
      subtitle: '25min sessions',
      icon: 'timer',
      isActive: true
    }
  ];

  // Achievements
  achievements: Achievement[] = [
    {
      id: '7-day-streak',
      title: '7 Day Streak',
      icon: 'flame',
      description: 'Study for 7 consecutive days',
      isEarned: true,
      earnedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    },
    {
      id: '25-hours',
      title: '25 Hours',
      icon: 'time',
      description: 'Complete 25 hours of study time',
      isEarned: true,
      earnedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
    },
    {
      id: 'first-place',
      title: 'First Place',
      icon: 'trophy',
      description: 'Rank first in your study group',
      isEarned: false,
      progress: 75,
      target: 100
    },
    {
      id: 'perfect-week',
      title: 'Perfect Week',
      icon: 'star',
      description: 'Complete all tasks for a full week',
      isEarned: false,
      progress: 60,
      target: 100
    }
  ];

  constructor() {
    this.INITIALIZE_PROFILE();
  }

  INITIALIZE_PROFILE() {
    console.log('Initializing user profile...');
    this.LOAD_USER_DATA();
    this.CHECK_ACHIEVEMENTS();
  }

  LOAD_USER_DATA() {
    // In a real app, this would fetch user data from a service
    console.log('Loading user data...');
  }

  CHECK_ACHIEVEMENTS() {
    // Check for newly earned achievements
    console.log('Checking for new achievements...');
  }

  // Profile management methods
  EDIT_PROFILE() {
    console.log('Editing profile...');
    // In a real app, this would open a profile editing modal or page
  }

  UPDATE_AVATAR() {
    console.log('Updating avatar...');
    // In a real app, this would open image picker
  }

  CHANGE_PASSWORD() {
    console.log('Changing password...');
    // Navigate to password change page
  }

  // Study preference management
  TOGGLE_PREFERENCE(preferenceId: string) {
    const preference = this.studyPreferences.find(p => p.id === preferenceId);
    if (preference) {
      preference.isActive = !preference.isActive;
      console.log(`Preference ${preferenceId} toggled:`, preference.isActive);
      this.SAVE_PREFERENCES();
    }
  }

  SAVE_PREFERENCES() {
    console.log('Saving study preferences...');
    // In a real app, this would save to a service
    const activePreferences = this.studyPreferences.filter(p => p.isActive);
    console.log('Active preferences:', activePreferences.map(p => p.title));
  }

  // Settings management
  TOGGLE_NOTIFICATIONS() {
    this.userSettings.notifications = !this.userSettings.notifications;
    console.log('Notifications toggled:', this.userSettings.notifications);
    this.SAVE_SETTINGS();
  }

  TOGGLE_AUTO_SYNC() {
    this.userSettings.autoSync = !this.userSettings.autoSync;
    console.log('Auto sync toggled:', this.userSettings.autoSync);
    this.SAVE_SETTINGS();
  }

  TOGGLE_DARK_MODE() {
    this.userSettings.darkMode = !this.userSettings.darkMode;
    console.log('Dark mode toggled:', this.userSettings.darkMode);
    this.APPLY_THEME_CHANGE();
    this.SAVE_SETTINGS();
  }

  APPLY_THEME_CHANGE() {
    // Apply theme change to the app
    // This would typically use a theme service
    console.log('Applying theme change...');
  }

  SAVE_SETTINGS() {
    console.log('Saving user settings...');
    // In a real app, this would save to a service
  }

  // Navigation methods
  OPEN_HELP_CENTER() {
    console.log('Opening help center...');
  }

  OPEN_PRIVACY_SETTINGS() {
    console.log('Opening privacy settings...');
  }

  REPORT_BUG() {
    console.log('Opening bug report...');
  }

  OPEN_ABOUT() {
    console.log('Opening about page...');
  }

  // Achievement methods
  VIEW_ALL_ACHIEVEMENTS() {
    console.log('Viewing all achievements...');
    // Navigate to achievements page
  }

  GET_ACHIEVEMENT_PROGRESS_TEXT(achievement: Achievement): string {
    if (achievement.isEarned) {
      return 'Earned';
    }
    if (achievement.progress && achievement.target) {
      return `${achievement.progress}/${achievement.target}`;
    }
    return 'Locked';
  }

  // Account actions
  BACKUP_DATA() {
    console.log('Starting data backup...');
    // Implement data backup functionality
    this.SHOW_BACKUP_PROGRESS();
  }

  SHOW_BACKUP_PROGRESS() {
    // Show backup progress indicator
    console.log('Backup in progress...');
    // Simulate backup completion
    setTimeout(() => {
      console.log('Backup completed successfully!');
    }, 2000);
  }

  RESET_SETTINGS() {
    console.log('Resetting settings to default...');
    // Show confirmation dialog first
    this.CONFIRM_RESET_SETTINGS();
  }

  CONFIRM_RESET_SETTINGS() {
    // In a real app, this would show a confirmation dialog
    const confirmed = confirm('Are you sure you want to reset all settings to default?');
    if (confirmed) {
      this.PERFORM_SETTINGS_RESET();
    }
  }

  PERFORM_SETTINGS_RESET() {
    this.userSettings = {
      notifications: true,
      autoSync: true,
      darkMode: false,
      studyReminders: true,
      weeklyReports: false,
      groupNotifications: false
    };
    console.log('Settings reset to default');
  }

  SIGN_OUT() {
    console.log('Signing out user...');
    // Show confirmation dialog
    this.CONFIRM_SIGN_OUT();
  }

  CONFIRM_SIGN_OUT() {
    const confirmed = confirm('Are you sure you want to sign out?');
    if (confirmed) {
      this.PERFORM_SIGN_OUT();
    }
  }

  PERFORM_SIGN_OUT() {
    console.log('User signed out');
    // In a real app, this would clear user data and navigate to login
  }

  // Utility methods
  FORMAT_STUDY_HOURS(hours: number): string {
    if (hours >= 1000) {
      return `${(hours / 1000).toFixed(1)}k`;
    }
    return hours.toString();
  }

  FORMAT_ACHIEVEMENT_DATE(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return 'Today';
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 30) {
      return `${diffDays} days ago`;
    } else {
      return date.toLocaleDateString();
    }
  }

  GET_STREAK_ENCOURAGEMENT(): string {
    const streak = this.userProfile.studyStats.dayStreak;
    if (streak >= 30) {
      return 'Incredible dedication! 🔥';
    } else if (streak >= 14) {
      return 'Amazing streak! 🌟';
    } else if (streak >= 7) {
      return 'Great momentum! 💪';
    } else {
      return 'Keep it up! 📚';
    }
  }

  // Component lifecycle
  ionViewWillEnter() {
    console.log('Tab 5 - Profile: View will enter');
    this.REFRESH_PROFILE_DATA();
  }

  REFRESH_PROFILE_DATA() {
    // Refresh profile data when entering the tab
    console.log('Refreshing profile data...');
    this.CHECK_ACHIEVEMENTS();
  }
}