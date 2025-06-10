import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

interface StudyResource {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  lastAccessed?: Date;
  isBookmarked: boolean;
}

interface StudyStats {
  hoursStudied: number;
  tasksDone: number;
  resourcesUsed: number;
  goalProgress: number;
}

interface RecentActivity {
  id: string;
  type: 'video' | 'download' | 'quiz' | 'reading';
  title: string;
  timestamp: Date;
  icon: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class Tab2Page {
  // Study statistics
  studyStats: StudyStats = {
    hoursStudied: 12,
    tasksDone: 8,
    resourcesUsed: 3,
    goalProgress: 85
  };

  // Sample resources data
  resources: StudyResource[] = [
    {
      id: '1',
      title: 'Video Lectures',
      description: 'Access recorded lectures, tutorials, and educational videos from your courses.',
      icon: 'play',
      category: 'videos',
      isBookmarked: false
    },
    {
      id: '2',
      title: 'Study Guides',
      description: 'Download comprehensive study guides, summaries, and reference materials.',
      icon: 'document-text',
      category: 'documents',
      isBookmarked: true
    },
    {
      id: '3',
      title: 'Practice Tests',
      description: 'Take practice exams and quizzes to test your knowledge and track progress.',
      icon: 'clipboard',
      category: 'assessments',
      isBookmarked: false
    },
    {
      id: '4',
      title: 'Digital Library',
      description: 'Access textbooks, research papers, and academic articles from various sources.',
      icon: 'library',
      category: 'library',
      isBookmarked: true
    }
  ];

  // Recent activity data
  recentActivities: RecentActivity[] = [
    {
      id: '1',
      type: 'video',
      title: 'Watched "Calculus Fundamentals" video',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      icon: 'play'
    },
    {
      id: '2',
      type: 'download',
      title: 'Downloaded Physics study guide',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
      icon: 'download'
    },
    {
      id: '3',
      type: 'quiz',
      title: 'Completed Chemistry practice test (92%)',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      icon: 'school'
    }
  ];

  constructor() {
    this.INITIALIZE_TAB();
  }

  INITIALIZE_TAB() {
    // Initialize tab data
    this.LOAD_RECENT_STATS();
    this.SORT_RESOURCES_BY_USAGE();
  }

  LOAD_RECENT_STATS() {
    // Simulate loading recent statistics
    // In a real app, this would fetch from a service
    console.log('Loading study statistics...');
  }

  SORT_RESOURCES_BY_USAGE() {
    // Sort resources by last accessed or popularity
    this.resources.sort((a, b) => {
      if (a.isBookmarked && !b.isBookmarked) return -1;
      if (!a.isBookmarked && b.isBookmarked) return 1;
      return 0;
    });
  }

  // Quick action handlers
  OPEN_LIBRARY() {
    console.log('Opening library...');
    // Implement library navigation
  }

  OPEN_NOTES() {
    console.log('Opening notes...');
    // Implement notes navigation
  }

  OPEN_VIDEOS() {
    console.log('Opening videos...');
    // Implement videos navigation
  }

  OPEN_DOWNLOADS() {
    console.log('Opening downloads...');
    // Implement downloads navigation
  }

  // Resource action handlers
  WATCH_VIDEO(resourceId: string) {
    console.log('Watching video for resource:', resourceId);
    this.TRACK_RESOURCE_USAGE(resourceId, 'video_play');
  }

  DOWNLOAD_RESOURCE(resourceId: string) {
    console.log('Downloading resource:', resourceId);
    this.TRACK_RESOURCE_USAGE(resourceId, 'download');
  }

  START_QUIZ(resourceId: string) {
    console.log('Starting quiz for resource:', resourceId);
    this.TRACK_RESOURCE_USAGE(resourceId, 'quiz_start');
  }

  BROWSE_LIBRARY() {
    console.log('Browsing library...');
    this.TRACK_RESOURCE_USAGE('library', 'browse');
  }

  SEARCH_LIBRARY() {
    console.log('Searching library...');
    this.TRACK_RESOURCE_USAGE('library', 'search');
  }

  BOOKMARK_RESOURCE(resourceId: string) {
    const resource = this.resources.find(r => r.id === resourceId);
    if (resource) {
      resource.isBookmarked = !resource.isBookmarked;
      console.log(`Resource ${resourceId} bookmark status:`, resource.isBookmarked);
    }
  }

  SHARE_RESOURCE(resourceId: string) {
    console.log('Sharing resource:', resourceId);
    // Implement sharing functionality
  }

  VIEW_RESULTS(resourceId: string) {
    console.log('Viewing results for resource:', resourceId);
    // Implement results viewing
  }

  SAVE_RESOURCE(resourceId: string) {
    console.log('Saving resource:', resourceId);
    this.BOOKMARK_RESOURCE(resourceId);
  }

  // Utility methods
  TRACK_RESOURCE_USAGE(resourceId: string, action: string) {
    // Track resource usage for analytics
    const usage = {
      resourceId,
      action,
      timestamp: new Date()
    };
    console.log('Tracking usage:', usage);
    
    // Update recent activities
    const activityTitle = this.GET_ACTIVITY_TITLE(action, resourceId);
    const newActivity: RecentActivity = {
      id: Date.now().toString(),
      type: this.GET_ACTIVITY_TYPE(action),
      title: activityTitle,
      timestamp: new Date(),
      icon: this.GET_ACTIVITY_ICON(action)
    };
    
    this.recentActivities.unshift(newActivity);
    this.recentActivities = this.recentActivities.slice(0, 10); // Keep only last 10 activities
  }

  GET_ACTIVITY_TITLE(action: string, resourceId: string): string {
    const resource = this.resources.find(r => r.id === resourceId);
    const resourceName = resource ? resource.title : 'Resource';
    
    switch (action) {
      case 'video_play':
        return `Watched ${resourceName} video`;
      case 'download':
        return `Downloaded ${resourceName}`;
      case 'quiz_start':
        return `Started ${resourceName} quiz`;
      case 'browse':
        return 'Browsed digital library';
      case 'search':
        return 'Searched digital library';
      default:
        return `Accessed ${resourceName}`;
    }
  }

  GET_ACTIVITY_TYPE(action: string): RecentActivity['type'] {
    switch (action) {
      case 'video_play':
        return 'video';
      case 'download':
        return 'download';
      case 'quiz_start':
        return 'quiz';
      default:
        return 'reading';
    }
  }

  GET_ACTIVITY_ICON(action: string): string {
    switch (action) {
      case 'video_play':
        return 'play';
      case 'download':
        return 'download';
      case 'quiz_start':
        return 'school';
      case 'browse':
      case 'search':
        return 'library';
      default:
        return 'document';
    }
  }

  FORMAT_TIMESTAMP(timestamp: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - timestamp.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffHours < 1) {
      return 'Just now';
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else {
      return `${diffDays} days ago`;
    }
  }

  // Component lifecycle
  ionViewWillEnter() {
    console.log('Tab 2 - Study Resources: View will enter');
    this.REFRESH_STATS();
  }

  REFRESH_STATS() {
    // Refresh statistics when entering the tab
    // This could fetch updated data from a service
    console.log('Refreshing study statistics...');
  }
}