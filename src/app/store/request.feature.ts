import { 
  signalStoreFeature,
  withState
} from '@ngrx/signals';
import { RequestState } from '../types';

export const withRequestStatus = () => {
  return signalStoreFeature(withState<RequestState>({ loading: false }));
}

export const setLoading = (): Partial<RequestState> => {
  return { loading: true };
}

export const setLoaded = (): Partial<RequestState> => {
  return { loading: false };
}

export const setErrors = (errors: string[]): Partial<RequestState> => {
  return { errors }
}
