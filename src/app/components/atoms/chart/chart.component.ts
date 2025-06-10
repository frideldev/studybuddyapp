// src/app/components/atoms/chart/chart.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

interface ChartData {
  label: string;
  value: number;
}

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, IonicModule],
  template: `
    <div class="chart-container">
      <h3 class="chart-title">{{ title }}</h3>
      <div class="chart-content">
        <div class="chart-bars">
          <div 
            *ngFor="let item of data; trackBy: TRACK_BY_LABEL" 
            class="bar-container">
            <div 
              class="bar" 
              [style.height.%]="GET_BAR_HEIGHT(item.value)"
              [style.background-color]="barColor">
            </div>
            <span class="bar-label">{{ item.label }}</span>
            <span class="bar-value">{{ item.value }}h</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .chart-container {
      background: var(--ion-color-dark-tint);
      border-radius: 16px;
      padding: 20px;
      margin: 20px 0;
    }

    .chart-title {
      color: var(--ion-color-light);
      margin-bottom: 20px;
      font-size: 16px;
      font-weight: 600;
    }

    .chart-content {
      height: 200px;
      display: flex;
      align-items: flex-end;
    }

    .chart-bars {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;
      height: 100%;
      gap: 8px;
    }

    .bar-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      height: 100%;
      justify-content: flex-end;
    }

    .bar {
      width: 100%;
      max-width: 24px;
      border-radius: 4px 4px 0 0;
      min-height: 8px;
      transition: all 0.3s ease;
    }

    .bar-label {
      font-size: 12px;
      color: var(--ion-color-medium);
      margin-top: 8px;
    }

    .bar-value {
      font-size: 10px;
      color: var(--ion-color-light);
      margin-top: 4px;
      font-weight: 500;
    }
  `]
})
export class ChartComponent implements OnInit {
  @Input() title: string = '';
  @Input() data: ChartData[] = [];
  @Input() barColor: string = '#3880ff';

  private maxValue: number = 0;

  ngOnInit() {
    this.CALCULATE_MAX_VALUE();
  }

  private CALCULATE_MAX_VALUE(): void {
    this.maxValue = Math.max(...this.data.map(item => item.value));
  }

  GET_BAR_HEIGHT(value: number): number {
    return (value / this.maxValue) * 100;
  }

  TRACK_BY_LABEL(index: number, item: ChartData): string {
    return item.label;
  }
}