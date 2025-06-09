import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-analytics-icon',
  templateUrl: './analytics-icon.component.html',
  styleUrls: ['./analytics-icon.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class AnalyticsIconComponent {
  @Input() iconName: string = '';
  @Input() iconColor: string = '#3880ff';
}