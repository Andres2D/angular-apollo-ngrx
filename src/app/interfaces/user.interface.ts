interface BaseUser {
  login: string;
  avatarUrl: string;
}

export interface User extends BaseUser {
  bio: string;
}

export interface Followers {
  nodes: BaseUser[]
}
