import { gql } from 'apollo-angular';
import { User } from '../interfaces';

export const GET_USER_PROFILE = gql<{ viewer: User }, never>`
  query GetUserProfile {
    viewer {
      login
      bio
      avatarUrl
    }
  }
`;
