import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

interface Task {
  id: string;
  title: string;
  subject: string;
  date: string;
  time: string;
  duration: number;
  durationUnit: string;
  priority: 'low' | 'medium' | 'high';
  status: 'notStarted' | 'progress' | 'completed';
}

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class Tab1Page {
  // Task data properties
  tabOneData: any = {};
  userInput: string = '';
  isLoading: boolean = false;
  
  // Tasks management
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  searchTerm: string = '';
  selectedFilter: string = 'all';
  
  // Modal control
  showAddTaskModal: boolean = false;
  
  // New task form
  newTask: Partial<Task> = {
    title: '',
    subject: '',
    date: '',
    time: '',
    duration: 1,
    durationUnit: 'hours',
    priority: 'medium',
    status: 'notStarted'
  };
  
  // Task counts
  taskCounts = {
    all: 0,
    notStarted: 0,
    progress: 0
  };

  constructor() {
    this.INITIALIZE_TAB();
  }

  INITIALIZE_TAB() {
    this.selectedFilter = 'all';
    this.searchTerm = '';
    this.SET_DEFAULT_DATE_TIME();
    this.UPDATE_FILTERED_TASKS();
    this.UPDATE_TASK_COUNTS();
  }

  HANDLE_USER_ACTION() {
    // Handle user actions like button clicks
  }

  PROCESS_DATA() {
    // Process task data
  }

  SAVE_CONTENT() {
    // Save task content
  }

  // Modal management
  SHOW_ADD_TASK_MODAL() {
    this.RESET_NEW_TASK();
    this.SET_DEFAULT_DATE_TIME();
    this.showAddTaskModal = true;
  }

  CLOSE_ADD_TASK_MODAL() {
    this.showAddTaskModal = false;
    this.RESET_NEW_TASK();
  }

  RESET_NEW_TASK() {
    this.newTask = {
      title: '',
      subject: '',
      date: '',
      time: '',
      duration: 1,
      durationUnit: 'hours',
      priority: 'medium',
      status: 'notStarted'
    };
  }

  SET_DEFAULT_DATE_TIME() {
    const now = new Date();
    this.newTask.date = now.toISOString().split('T')[0];
    this.newTask.time = now.toTimeString().slice(0, 5);
  }

  // Task management
  SAVE_TASK() {
    if (this.IS_TASK_VALID()) {
      const task: Task = {
        id: this.GENERATE_TASK_ID(),
        title: this.newTask.title || '',
        subject: this.newTask.subject || '',
        date: this.newTask.date || '',
        time: this.newTask.time || '',
        duration: this.newTask.duration || 1,
        durationUnit: this.newTask.durationUnit || 'hours',
        priority: this.newTask.priority || 'medium',
        status: this.newTask.status || 'notStarted'
      };
      
      this.tasks.push(task);
      this.UPDATE_FILTERED_TASKS();
      this.UPDATE_TASK_COUNTS();
      this.CLOSE_ADD_TASK_MODAL();
      
      console.log('Task saved:', task);
    }
  }

  DELETE_TASK(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.UPDATE_FILTERED_TASKS();
    this.UPDATE_TASK_COUNTS();
  }

  IS_TASK_VALID(): boolean {
    return !!(this.newTask.title && 
              this.newTask.date && 
              this.newTask.time && 
              this.newTask.duration && 
              this.newTask.duration > 0);
  }

  GENERATE_TASK_ID(): string {
    return 'task_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // Filter and search
  SET_FILTER(filter: string) {
    this.selectedFilter = filter;
    this.UPDATE_FILTERED_TASKS();
  }

  SEARCH_TASKS(event: any) {
    this.searchTerm = event.target.value.toLowerCase();
    this.UPDATE_FILTERED_TASKS();
  }

  UPDATE_FILTERED_TASKS() {
    let filtered = [...this.tasks];
    
    // Apply status filter
    if (this.selectedFilter !== 'all') {
      filtered = filtered.filter(task => task.status === this.selectedFilter);
    }
    
    // Apply search filter
    if (this.searchTerm) {
      filtered = filtered.filter(task => 
        task.title.toLowerCase().includes(this.searchTerm) ||
        task.subject.toLowerCase().includes(this.searchTerm)
      );
    }
    
    this.filteredTasks = filtered;
  }

  UPDATE_TASK_COUNTS() {
    this.taskCounts = {
      all: this.tasks.length,
      notStarted: this.tasks.filter(t => t.status === 'notStarted').length,
      progress: this.tasks.filter(t => t.status === 'progress').length
    };
  }

  // Form helpers
  SET_PRIORITY(priority: 'low' | 'medium' | 'high') {
    this.newTask.priority = priority;
  }

  // Date formatting
  FORMAT_DATE(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric'
    });
  }
}