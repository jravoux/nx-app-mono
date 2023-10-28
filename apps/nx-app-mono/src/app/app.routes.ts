import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'feat1',
  },
  {
    path: 'feat1',
    loadChildren: () =>
      import('@nx-app-mono/features/feature1').then((m) => m.Feature1Module),
  },
  {
    path: 'feat2',
    loadChildren: () =>
      import('@nx-app-mono/features/feature2').then((m) => m.Feature2Module),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
