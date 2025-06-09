// Actualizar: tab5/tab5.page.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AnalyticsCard } from './models/analytics.model';
import { AnalyticsService } from './services/analytics.service';
import { AnalyticsCardComponent } from './components/molecules/analytics-card/analytics-card.component';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    AnalyticsCardComponent
  ]
})
export class Tab5Page implements OnInit {
  studyStreakCard!: AnalyticsCard;

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.LOAD_ANALYTICS_DATA();
  }

  private LOAD_ANALYTICS_DATA(): void {
    this.studyStreakCard = this.analyticsService.GET_STUDY_STREAK_CARD();
  }
}