import { Provider } from '@angular/core';
import { 
  signalStore, 
  withMethods,
  withComputed,
  withHooks
} from '@ngrx/signals';

export const DashboardStore = signalStore(
  { providedIn: 'root' },
  withMethods((store) => {
    console.log(store);
    return store;
  }),
  withComputed((store) => {
    console.log(store);
    return store;
  }),
  withHooks((loadAll) => ({
    onInit() {
      console.log('init', loadAll);
    }
  }))
);

export type DashboardStore = InstanceType<typeof DashboardStore>;

export function provideDashboardStore(): Provider[] {
  return [ DashboardStore ]
}
