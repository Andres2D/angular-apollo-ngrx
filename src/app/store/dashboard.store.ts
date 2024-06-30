import { computed, inject, Provider } from '@angular/core';
import { 
  signalStore, 
  withMethods,
  withComputed,
  withHooks,
  withState,
  patchState
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';

import { DashboardState } from '../types';
import { withRequestStatus, setLoading, setErrors, setLoaded } from './request.feature';
import { Apollo } from 'apollo-angular';
import { pipe, switchMap, tap } from 'rxjs';
import { ApolloError, ApolloQueryResult } from '@apollo/client';
import { Dashboard } from '../interfaces';
import { GET_DASHBOARD } from '../graphql/queries';

const initialState: DashboardState = {
  loading: true
}

export const DashboardStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withRequestStatus(),
  // withEntities<Dashboard>(),
  withMethods((store) => {
    const apollo = inject(Apollo);

    return {
      loadAll: rxMethod<void>(
        pipe(
          tap({ next: () => patchState(store, setLoading()) }),
          switchMap(() => apollo.query({ query: GET_DASHBOARD})),
          tapResponse({
            next: (response: ApolloQueryResult<{ viewer: Dashboard }>) => {
              patchState(store, { data: response.data.viewer }),
              patchState(store, setLoaded())
            },
            error: (errors: ApolloError[]) => 
              patchState(store, setErrors(errors.map(error => error.message))),
            finalize: () => {
              patchState(store, setLoaded())
            }
          })
        )
      )
    }
  }),
  withComputed((data) => ({
    dashboard: computed(() => data)
  })),
  withHooks(({loadAll}) => ({
    onInit: () => loadAll()
  }))
);

export type DashboardStore = InstanceType<typeof DashboardStore>;

export function provideDashboardStore(): Provider[] {
  return [ DashboardStore ]
}
