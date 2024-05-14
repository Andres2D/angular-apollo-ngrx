import { HttpLink } from 'apollo-angular/http';
import { APOLLO_FLAGS, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, from, InMemoryCache } from '@apollo/client/core';
import type { NormalizedCacheObject } from '@apollo/client/cache/inmemory/types';
import { setContext } from '@apollo/client/link/context';

import { EnvironmentProviders, isDevMode, makeEnvironmentProviders } from '@angular/core';

const basicContext = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Accept: 'charset=utf-8',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env['NG_APP_API_TOKEN']}`
    }
  }
});

const createDefaultApollo = (
  httpLink: HttpLink
): ApolloClientOptions<NormalizedCacheObject> => {

  const cache = new InMemoryCache();

  const http = httpLink.create({
    uri: import.meta.env['NG_APP_API_URL']
  })

  return {
    connectToDevTools: isDevMode(),
    assumeImmutableResults: true,
    cache,
    link: from([basicContext, http])
  }
}

export const provideApollo = (): EnvironmentProviders => 
  makeEnvironmentProviders([
    {
      provide: APOLLO_FLAGS,
      useValue: {
        useInitialLoading: true
      }
    },
    {
      provide: APOLLO_OPTIONS,
      useFactory: createDefaultApollo,
      deps: [HttpLink]
    }
  ])
