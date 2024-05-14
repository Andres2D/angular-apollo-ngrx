import { 
  User,
  Followers,
  Edge
} from './';

export interface Dashboard extends User {
  followers: Followers;
  issues: Edge[];
}
