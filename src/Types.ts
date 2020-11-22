export interface User {
  email?: string;
  username: string;
  password?: string;
}

export interface Deed {
  title: string;
  description: string;
  url: string;
  completedUsers: string[];
  __v: number;
  _id: string;
}
