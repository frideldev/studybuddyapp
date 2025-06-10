import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AnalyticsCard } from '../../../models/analytics.model';
import { AnalyticsIconComponent } from '../../atoms/analytics-icon/analytics-icon.component';

@Component({
  selector: 'app-analytics-card',
  templateUrl: './analytics-card.component.html',
  styleUrls: ['./analytics-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    AnalyticsIconComponent
  ]
})
export class AnalyticsCardComponent {
  @Input() cardData!: AnalyticsCard;

  GET_ICON_COLOR(): string {
    switch (this.cardData.type) {
      case 'streak':
        return '#ff6b35';
      case 'percentage':
        return '#28a745';
      case 'hours':
        return '#6f42c1';
      default:
        return '#3880ff';
    }
  }
}