// src/app/components/atoms/analytics-card/analytics-card.component.ts
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
            [color]="iconColor"
            class="card-icon">
          </ion-icon>
          <span class="card-title">{{ title }}</span>
        </div>
        <div class="card-value">{{ value }}</div>
        <div class="card-subtitle">{{ subtitle }}</div>
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
  @Input() iconColor: string = 'primary';
}