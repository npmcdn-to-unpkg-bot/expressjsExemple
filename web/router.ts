import { provideRouter, RouterConfig }  from '@angular/router';

import { ClientDetailComponent } from './client/client.component';

export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/client',
    pathMatch: 'full'
  },
  {
    path: 'client',
    component: ClientDetailComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
