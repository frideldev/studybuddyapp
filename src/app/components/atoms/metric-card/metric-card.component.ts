// 1. ÁTOMO: Métrica Individual
// src/app/shared/components/atoms/metric-card/metric-card.component.ts

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardContent, IonIcon } from '@ionic/angular/standalone';

export interface MetricData {
  icon: string;
  iconColor: string;
  title: string;
  value: string;
  unit?: string;
}

@Component({
  selector: 'app-metric-card',
  standalone: true,
  imports: [CommonModule, IonCard, IonCardContent, IonIcon],
  template: `
    <ion-card class="metric-card">
      <ion-card-content>
        <div class="metric-icon" [style.background-color]="data.iconColor">
          <ion-icon [name]="data.icon"></ion-icon>
        </div>
        <div class="metric-content">
          <p class="metric-title">{{ data.title }}</p>
          <div class="metric-value">
            <span class="value">{{ data.value }}</span>
            <span class="unit" *ngIf="data.unit">{{ data.unit }}</span>
          </div>
        </div>
      </ion-card-content>
    </ion-card>
  `,
  styleUrls: ['./metric-card.component.scss']
})
export class MetricCardComponent {
  @Input({ required: true }) data!: MetricData;
}