import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

interface ThemeOption {
  id: 'dark' | 'light' | 'auto';
  title: string;
  subtitle: string;
  isActive: boolean;
}

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  isEnabled: boolean;
}

interface TimerSettings {
  focusSession: number; // minutes
  shortBreak: number; // minutes
  longBreak: number; // minutes
  selectedPreset: string;
}

interface StorageInfo {
  appDataSize: string;
  studySessions: number;
  tasksCreated: number;
  lastBackup: Date;
}

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class Tab6Page {
  // Theme settings
  themeOptions: ThemeOption[] = [
    {
      id: 'dark',
      title: 'Dark Mode',
      subtitle: 'Easy on the eyes',
      isActive: true
    },
    {
      id: 'light',
      title: 'Light Mode',
      subtitle: 'Classic appearance',
      isActive: false
    },
    {
      id: 'auto',
      title: 'Auto',
      subtitle: 'Follow system',
      isActive: false
    }
  ];

  // Notification settings
  notificationSettings: NotificationSetting[] = [
    {
      id: 'study-reminders',
      title: 'Study Reminders',
      description: 'Get reminded about your scheduled study sessions',
      isEnabled: true
    },
    {
      id: 'task-deadlines',
      title: 'Task Deadlines',
      description: 'Alerts for upcoming task deadlines',
      isEnabled: true
    },
    {
      id: 'group-activities',
      title: 'Group Activities',
      description: 'Updates from your study groups',
      isEnabled: false
    },
    {
      id: 'weekly-reports',
      title: 'Weekly Reports',
      description: 'Summary of your weekly progress',
      isEnabled: true
    }
  ];

  // Timer settings
  timerSettings: TimerSettings = {
    focusSession: 25,
    shortBreak: 5,
    longBreak: 15,
    selectedPreset: 'pomodoro'
  };

  // Timer presets
  timerPresets = [
    { id: 'pomodoro', name: 'Pomodoro', focus: 25, short: 5, long: 15 },
    { id: '52-17', name: '52-17', focus: 52, short: 17, long: 17 },
    { id: '90-20', name: '90-20', focus: 90, short: 20, long: 30 },
    { id: 'custom', name: 'Custom', focus: 0, short: 0, long: 0 }
  ];

  // Storage information
  storageInfo: StorageInfo = {
    appDataSize: '24.5 MB',
    studySessions: 156,
    tasksCreated: 89,
    lastBackup: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
  };

  constructor() {
    this.INITIALIZE_SETTINGS();
  }

  INITIALIZE_SETTINGS() {
    console.log('Initializing settings...');
    this.LOAD_SAVED_SETTINGS();
    this.CHECK_STORAGE_STATUS();
  }

  LOAD_SAVED_SETTINGS() {
    // In a real app, this would load settings from storage
    console.log('Loading saved settings...');
  }

  CHECK_STORAGE_STATUS() {
    // Check current storage usage
    console.log('Checking storage status...');
  }

  // Theme management
  SELECT_THEME(themeId: 'dark' | 'light' | 'auto') {
    // Deactivate all themes
    this.themeOptions.forEach(theme => theme.isActive = false);
    
    // Activate selected theme
    const selectedTheme = this.themeOptions.find(theme => theme.id === themeId);
    if (selectedTheme) {
      selectedTheme.isActive = true;
      console.log('Theme changed to:', themeId);
      this.APPLY_THEME(themeId);
    }
  }

  APPLY_THEME(themeId: 'dark' | 'light' | 'auto') {
    // Apply theme to the application
    // This would typically use a theme service
    console.log('Applying theme:', themeId);
    
    switch (themeId) {
      case 'dark':
        document.documentElement.classList.add('ion-palette-dark');
        document.documentElement.classList.remove('ion-palette-light');
        break;
      case 'light':
        document.documentElement.classList.add('ion-palette-light');
        document.documentElement.classList.remove('ion-palette-dark');
        break;
      case 'auto':
        // Follow system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
          document.documentElement.classList.add('ion-palette-dark');
          document.documentElement.classList.remove('ion-palette-light');
        } else {
          document.documentElement.classList.add('ion-palette-light');
          document.documentElement.classList.remove('ion-palette-dark');
        }
        break;
    }
    
    this.SAVE_THEME_PREFERENCE(themeId);
  }

  SAVE_THEME_PREFERENCE(themeId: string) {
    localStorage.setItem('user-theme', themeId);
    console.log('Theme preference saved:', themeId);
  }

  // Notification management
  TOGGLE_NOTIFICATION(notificationId: string) {
    const notification = this.notificationSettings.find(n => n.id === notificationId);
    if (notification) {
      notification.isEnabled = !notification.isEnabled;
      console.log(`Notification ${notificationId} toggled:`, notification.isEnabled);
      this.SAVE_NOTIFICATION_SETTINGS();
    }
  }

  SAVE_NOTIFICATION_SETTINGS() {
    console.log('Saving notification settings...');
    // In a real app, this would save to a service and update push notification permissions
  }

  // Timer settings management
  UPDATE_TIMER_SETTING(setting: 'focusSession' | 'shortBreak' | 'longBreak', value: number) {
    if (value > 0 && value <= 180) { // Max 3 hours
      this.timerSettings[setting] = value;
      this.timerSettings.selectedPreset = 'custom';
      console.log(`Timer ${setting} updated to ${value} minutes`);
      this.SAVE_TIMER_SETTINGS();
    }
  }

  SELECT_TIMER_PRESET(presetId: string) {
    const preset = this.timerPresets.find(p => p.id === presetId);
    if (preset && presetId !== 'custom') {
      this.timerSettings.focusSession = preset.focus;
      this.timerSettings.shortBreak = preset.short;
      this.timerSettings.longBreak = preset.long;
      this.timerSettings.selectedPreset = presetId;
      console.log('Timer preset selected:', presetId);
      this.SAVE_TIMER_SETTINGS();
    } else if (presetId === 'custom') {
      this.timerSettings.selectedPreset = 'custom';
    }
  }

  SAVE_TIMER_SETTINGS() {
    console.log('Saving timer settings...');
    // In a real app, this would save to a service
  }

  IS_PRESET_ACTIVE(presetId: string): boolean {
    return this.timerSettings.selectedPreset === presetId;
  }

  // Quick actions
  BACKUP_DATA() {
    console.log('Starting data backup...');
    this.SHOW_BACKUP_PROGRESS();
  }

  SHOW_BACKUP_PROGRESS() {
    // Show backup progress
    console.log('Backup in progress...');
    
    // Simulate backup process
    setTimeout(() => {
      this.storageInfo.lastBackup = new Date();
      console.log('Backup completed successfully!');
      this.SHOW_BACKUP_SUCCESS();
    }, 3000);
  }

  SHOW_BACKUP_SUCCESS() {
    console.log('Backup completed successfully!');
    // In a real app, this would show a success toast or alert
  }

  EXPORT_DATA() {
    console.log('Exporting data...');
    // In a real app, this would generate and download user data
    this.GENERATE_EXPORT_FILE();
  }

  GENERATE_EXPORT_FILE() {
    // Generate export file
    const exportData = {
      studySessions: this.storageInfo.studySessions,
      tasksCreated: this.storageInfo.tasksCreated,
      settings: {
        notifications: this.notificationSettings,
        timer: this.timerSettings
      },
      exportDate: new Date().toISOString()
    };
    
    console.log('Export data generated:', exportData);
    // In a real app, this would trigger file download
  }

  RESET_SETTINGS() {
    console.log('Resetting settings...');
    this.CONFIRM_RESET();
  }

  CONFIRM_RESET() {
    // Show confirmation dialog
    const confirmed = confirm('Are you sure you want to reset all settings to default? This action cannot be undone.');
    if (confirmed) {
      this.PERFORM_RESET();
    }
  }

  PERFORM_RESET() {
    // Reset all settings to default
    this.SELECT_THEME('dark');
    this.notificationSettings.forEach(n => {
      n.isEnabled = n.id === 'study-reminders' || n.id === 'weekly-reports';
    });
    this.timerSettings = {
      focusSession: 25,
      shortBreak: 5,
      longBreak: 15,
      selectedPreset: 'pomodoro'
    };
    
    console.log('Settings reset to default');
    this.SAVE_ALL_SETTINGS();
  }

  GET_HELP() {
    console.log('Opening help...');
    // In a real app, this would open help documentation or support
  }

  // Storage management
  CLEAR_DATA() {
    console.log('Clearing data...');
    this.CONFIRM_CLEAR_DATA();
  }

  CONFIRM_CLEAR_DATA() {
    const confirmed = confirm('Are you sure you want to clear all app data? This will delete all your study sessions, tasks, and progress. This action cannot be undone.');
    if (confirmed) {
      this.PERFORM_DATA_CLEAR();
    }
  }

  PERFORM_DATA_CLEAR() {
    // Clear all user data
    this.storageInfo = {
      appDataSize: '0.5 MB',
      studySessions: 0,
      tasksCreated: 0,
      lastBackup: new Date()
    };
    
    console.log('All data cleared');
    // In a real app, this would clear all user data from storage
  }

  // Utility methods
  FORMAT_LAST_BACKUP(date: Date): string {
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

  SAVE_ALL_SETTINGS() {
    this.SAVE_NOTIFICATION_SETTINGS();
    this.SAVE_TIMER_SETTINGS();
    console.log('All settings saved');
  }

  // Component lifecycle
  ionViewWillEnter() {
    console.log('Tab 6 - Settings: View will enter');
    this.REFRESH_STORAGE_INFO();
  }

  REFRESH_STORAGE_INFO() {
    // Refresh storage information
    console.log('Refreshing storage info...');
    this.CHECK_STORAGE_STATUS();
  }
}