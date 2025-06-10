import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { ThemeService } from 'src/services/theme.service';

interface UserSettings {
  pushNotifications: boolean;
  emailNotifications: boolean;
  soundEffects: boolean;
  focusMode: boolean;
  darkMode: boolean;
}

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class Tab4Page implements OnInit {
  // User info
  userName: string = 'Alex Johnson';
  userEmail: string = 'alex.johnson@studybuddy.com';
  
  // Theme
  selectedTheme: 'light' | 'dark' | 'system' = 'dark';
  
  // Settings
  settings: UserSettings = {
    pushNotifications: true,
    emailNotifications: true,
    soundEffects: false,
    focusMode: true,
    darkMode: true
  };

  constructor(
    private themeService: ThemeService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.LOAD_USER_SETTINGS();
    this.DETECT_CURRENT_THEME();
  }

  // Theme Management
  SET_THEME(theme: 'light' | 'dark' | 'system'): void {
    this.selectedTheme = theme;
    
    switch (theme) {
      case 'light':
        this.themeService.setUserTheme('light');
        this.SHOW_TOAST('Light theme activated');
        break;
      case 'dark':
        this.themeService.setUserTheme('dark');
        this.SHOW_TOAST('Dark theme activated');
        break;
      case 'system':
        this.themeService.clearUserPreference();
        this.SHOW_TOAST('System theme selected');
        break;
    }
    
    this.SAVE_SETTINGS();
  }

  private DETECT_CURRENT_THEME(): void {
    const savedTheme = localStorage.getItem('user-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      this.selectedTheme = savedTheme;
    } else {
      this.selectedTheme = 'system';
    }
  }

  // Settings Management
  SAVE_SETTINGS(): void {
    localStorage.setItem('user-settings', JSON.stringify(this.settings));
    localStorage.setItem('selected-theme', this.selectedTheme);
    console.log('Settings saved:', this.settings);
  }

  private LOAD_USER_SETTINGS(): void {
    const savedSettings = localStorage.getItem('user-settings');
    const savedTheme = localStorage.getItem('selected-theme');
    
    if (savedSettings) {
      this.settings = { ...this.settings, ...JSON.parse(savedSettings) };
    }
    
    if (savedTheme) {
      this.selectedTheme = savedTheme as 'light' | 'dark' | 'system';
    }
  }

  // Profile Actions
  async EDIT_PROFILE(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Edit Profile',
      message: 'Profile editing functionality will be available soon.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async PRIVACY_SECURITY(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Privacy & Security',
      message: 'Privacy settings will be available in the next update.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async STORAGE_BACKUP(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Storage & Backup',
      message: 'Your data is automatically synced to the cloud.',
      buttons: ['OK']
    });
    await alert.present();
  }

  // Study Preferences
  async STUDY_GOALS(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Study Goals',
      inputs: [
        {
          name: 'dailyGoal',
          type: 'number',
          placeholder: 'Daily study hours (e.g., 4)',
          min: 1,
          max: 12
        },
        {
          name: 'weeklyGoal',
          type: 'number',
          placeholder: 'Weekly study hours (e.g., 25)',
          min: 1,
          max: 80
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            if (data.dailyGoal || data.weeklyGoal) {
              this.SHOW_TOAST('Study goals updated successfully');
              // Save goals logic here
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async BREAK_REMINDERS(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Break Reminders',
      inputs: [
        {
          name: 'interval',
          type: 'radio',
          label: 'Every 25 minutes (Pomodoro)',
          value: '25',
          checked: true
        },
        {
          name: 'interval',
          type: 'radio',
          label: 'Every 45 minutes',
          value: '45'
        },
        {
          name: 'interval',
          type: 'radio',
          label: 'Every hour',
          value: '60'
        },
        {
          name: 'interval',
          type: 'radio',
          label: 'Disabled',
          value: 'disabled'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Save',
          handler: (interval) => {
            this.SHOW_TOAST(`Break reminders set to ${interval === 'disabled' ? 'disabled' : `every ${interval} minutes`}`);
          }
        }
      ]
    });
    await alert.present();
  }

  // App Actions
  async ABOUT_APP(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'About StudyBuddy',
      message: `
        <strong>StudyBuddy v1.0.0</strong><br><br>
        A comprehensive study companion app designed to help students organize their academic life, track progress, and achieve their educational goals.<br><br>
        <strong>Features:</strong><br>
        • Task and assignment management<br>
        • Study group collaboration<br>
        • Progress analytics<br>
        • Calendar integration<br>
        • Focus mode and break reminders
      `,
      buttons: ['OK']
    });
    await alert.present();
  }

  async HELP_SUPPORT(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Help & Support',
      message: 'Need help? Contact our support team at support@studybuddy.com or visit our help center.',
      buttons: [
        {
          text: 'Contact Support',
          handler: () => {
            // Open email client or support chat
            window.open('mailto:support@studybuddy.com');
          }
        },
        {
          text: 'Help Center',
          handler: () => {
            // Open help center URL
            window.open('https://help.studybuddy.com', '_blank');
          }
        },
        'Cancel'
      ]
    });
    await alert.present();
  }

  async RATE_APP(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Rate StudyBuddy',
      message: 'Enjoying StudyBuddy? Please take a moment to rate us in the app store. Your feedback helps us improve!',
      buttons: [
        {
          text: 'Maybe Later',
          role: 'cancel'
        },
        {
          text: 'Rate Now',
          handler: () => {
            // Open app store rating page
            this.SHOW_TOAST('Thank you for your feedback!');
          }
        }
      ]
    });
    await alert.present();
  }

  // Sign Out
  async SIGN_OUT(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Sign Out',
      message: 'Are you sure you want to sign out of your StudyBuddy account?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Sign Out',
          role: 'destructive',
          handler: () => {
            // Implement sign out logic
            this.SHOW_TOAST('Signed out successfully');
            // Navigate to login page
          }
        }
      ]
    });
    await alert.present();
  }

  // Toast Helper
  private async SHOW_TOAST(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      color: 'dark',
      cssClass: 'custom-toast'
    });
    await toast.present();
  }
}