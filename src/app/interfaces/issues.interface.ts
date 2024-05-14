import { Repository } from './';

export interface Edge {
  node: Issue; 
}

interface Issue {
  id: string;
  bodyText: string;
  title: string;
  state: 'OPEN' | 'CLOSED';
  repository: Repository;
}
