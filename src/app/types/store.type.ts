import { Dashboard } from '../interfaces/dashboard.interface';

export type RequestState = {
  errors?: string[];
  loading: boolean;
}

export type DashboardState = {
  data?: Dashboard;
  errors?: string[];
  loading: boolean;
}
