// src/app/components/atoms/tab-button/tab-button.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab-button',
  standalone: true,
  imports: [CommonModule, IonicModule],
  template: `
    <button 
      class="tab-button" 
      [class.active]="isActive"
      (click)="ON_TAB_CLICK()">
      <ion-icon [name]="icon" class="tab-icon"></ion-icon>
      <span class="tab-label">{{ label }}</span>
    </button>
  `,
  styles: [`
    .tab-button {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 20px;
      border: 1px solid var(--ion-color-medium);
      border-radius: 24px;
      background: transparent;
      color: var(--ion-color-medium);
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
      font-weight: 500;
      outline: none;
    }

    .tab-button:hover {
      border-color: var(--ion-color-primary);
      color: var(--ion-color-primary);
    }

    .tab-button.active {
      background: var(--ion-color-primary);
      border-color: var(--ion-color-primary);
      color: white;
    }

    .tab-button.active .tab-icon {
      color: white;
    }

    .tab-icon {
      font-size: 16px;
      transition: color 0.3s ease;
    }

    .tab-label {
      white-space: nowrap;
    }
  `]
})
export class TabButtonComponent {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() isActive: boolean = false;
  @Output() tabClick = new EventEmitter<void>();

  ON_TAB_CLICK(): void {
    this.tabClick.emit();
  }
}