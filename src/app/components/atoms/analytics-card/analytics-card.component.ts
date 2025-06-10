import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics-card',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `
    <ion-card class="analytics-card">
      <ion-card-content>
        <div class="card-header">
          <ion-icon 
            [name]="icon" 
            [color]="color"
            class="card-icon">
          </ion-icon>
          <span class="card-title">{{ title }}</span>
        </div>
        <div class="card-value">{{ value }}</div>
        <div class="card-subtitle" *ngIf="subtitle">{{ subtitle }}</div>
        
        <!-- Progress bar if progress is provided -->
        <div class="progress-container" *ngIf="progress !== undefined">
          <div class="progress-bar">
            <div 
              class="progress-fill" 
              [style.width.%]="progress"
              [style.background-color]="getProgressColor()">
            </div>
          </div>
          <span class="progress-text">{{ progress }}%</span>
        </div>
      </ion-card-content>
    </ion-card>
  `,
  styleUrls: ['./analytics-card.component.scss']
})
export class AnalyticsCardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() subtitle: string = '';
  @Input() icon: string = '';
  @Input() color: string = 'primary';
  @Input() progress: number | undefined = undefined;

  getProgressColor(): string {
    switch (this.color) {
      case 'primary': return '#3880ff';
      case 'success': return '#2dd36f';
      case 'warning': return '#ffc409';
      case 'danger': return '#eb445a';
      default: return '#3880ff';
    }
  }
}