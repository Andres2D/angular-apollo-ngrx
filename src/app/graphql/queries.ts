import { gql } from 'apollo-angular';
import { User } from '../interfaces';
import { Dashboard } from '../interfaces';

export const GET_USER_PROFILE = gql<{ viewer: User }, never>`
  query GetUserProfile {
    viewer {
      login
      bio
      avatarUrl
    }
  }
`;


export const GET_DASHBOARD = gql<{ viewer: Dashboard }, never>`
  query GetDashboard {
    viewer {
      login
      email
      bio
      followers(last: 100) {
        nodes {
          login
          avatarUrl
        }
      }
      issues(last: 10, filterBy: {states:  OPEN}) {
        edges {
          node {
            id
            bodyText
            title
            state
            repository {
              id
              name
              url
            }
          }
        }
      }
    }
  }
`;
