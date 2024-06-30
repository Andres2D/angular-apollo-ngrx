import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { Apollo } from 'apollo-angular';

import { routes } from './app.routes';
import { provideApollo } from './providers/apollo.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideApollo(),
    provideRouter(routes),
    provideStore(),
    Apollo
  ]
};
