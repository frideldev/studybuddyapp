import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'tab1',
        loadComponent: () => import('./tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () => import('./tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () => import('./tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'tab4',
        loadComponent: () => import('./tab4/tab4.page').then((m) => m.Tab4Page),
      },
      {
        path: 'tab5',
        loadComponent: () => import('./tab5/tab5.page').then((m) => m.Tab5Page),
      },
      {
        path: 'tab6',
        loadComponent: () => import('./tab6/tab6.page').then((m) => m.Tab6Page),
      },
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/register/register.component').then((m) => m.RegisterComponent),
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
];
