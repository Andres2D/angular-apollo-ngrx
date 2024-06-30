import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { Apollo } from 'apollo-angular';

import { routes } from './app.routes';
import { provideApollo } from './providers/apollo.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideApollo(),
    provideRouter(routes),
    Apollo,
    provideStore(),
    provideStoreDevtools({ 
      maxAge: 25, 
      logOnly: !isDevMode(),
      autoPause: true, 
      trace: false,
      traceLimit: 75,
      connectInZone: true 
    })
  ]
};
