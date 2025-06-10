import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule, IonicModule],
  template: `
    <ion-card class="stat-card">
      <ion-card-content>
        <div class="card-header">
          <ion-icon [name]="icon" [color]="color"></ion-icon>
          <span class="card-title">{{ label }}</span>
        </div>
        <div class="card-value">{{ value }}</div>
      </ion-card-content>
    </ion-card>
  `,
  styles: [`
    .stat-card {
      margin: 8px 0;
      background: var(--ion-color-dark);
      border-radius: 12px;
    }
    .card-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }
    .card-title {
      font-size: 14px;
      color: var(--ion-color-medium);
    }
    .card-value {
      font-size: 24px;
      font-weight: bold;
      color: var(--ion-color-light);
    }
  `]
})
export class StatCardComponent {
  @Input() icon: string = '';
  @Input() value: string = '';
  @Input() label: string = '';
  @Input() color: string = 'primary';
  @Input() size: string = 'medium';
}