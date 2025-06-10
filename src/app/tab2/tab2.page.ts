import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  currentDate = new Date(2025, 4); // mayo 2025
  selectedDate = new Date(2025, 4, 15);
  currentView: 'month' | 'week' | 'day' = 'month';

  daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendarMatrix: Date[][] = [];

  events: { [key: string]: { title: string; hour: number }[] } = {
  '2025-05-15': [{ title: 'Entrega proyecto', hour: 14 }]
  };


  hours: string[] = Array.from({ length: 24 }, (_, i) => {
    const hour = i === 0 ? 12 : i > 12 ? i - 12 : i;
    const period = i < 12 ? 'a. m.' : 'p. m.';
    return `${hour} ${period}`;
  });

  ngOnInit() {
    this.generateCalendar();
  }

  get selectedDateStr(): string {
    return this.selectedDate.toISOString().split('T')[0];
  }

  generateCalendar(): void {
    const start = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const end = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
    const calendar: Date[][] = [];
    let week: Date[] = [];

    let current = new Date(start);
    current.setDate(current.getDate() - current.getDay());

    while (current <= end || current.getDay() !== 0) {
      week.push(new Date(current));
      if (week.length === 7) {
        calendar.push(week);
        week = [];
      }
      current.setDate(current.getDate() + 1);
    }

    this.calendarMatrix = calendar;
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }

  isSelected(date: Date): boolean {
    return date.toDateString() === this.selectedDate.toDateString();
  }

  selectDate(date: Date): void {
    this.selectedDate = date;
    const key = this.selectedDateStr;
    if (!this.events[key]) {
      this.events[key] = [];
    }
  }

  addEvent(): void {
  const key = this.selectedDateStr;
  const title = prompt('Enter event title');
  const hourInput = prompt('Enter hour (0–23)');
  const hour = Number(hourInput);

  if (title && !isNaN(hour) && hour >= 0 && hour <= 23) {
    if (!this.events[key]) this.events[key] = [];
    this.events[key].push({ title, hour });
  } else {
    alert('Invalid input');
  }
}

  prevMonth(): void {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1);
    this.generateCalendar();
  }

  nextMonth(): void {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1);
    this.generateCalendar();
  }

  onViewChange(event: any): void {
    this.currentView = event.detail.value;
  }

  getCurrentWeek(): Date[] {
    const startOfWeek = new Date(this.selectedDate);
    startOfWeek.setDate(this.selectedDate.getDate() - this.selectedDate.getDay());

    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(startOfWeek);
      d.setDate(startOfWeek.getDate() + i);
      return d;
    });
  }
}
