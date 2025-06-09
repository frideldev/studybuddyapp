export const registerRoutes = [
  {
    path: '',
    loadComponent: () =>
      import ('./register.component').then((m) => m.RegisterComponent),
  }
];