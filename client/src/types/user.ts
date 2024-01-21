// import type { Notes } from '.';

export interface User {
  first_name: string;
  last_name: string;
  email: string;
}

export interface SavedUser {
  [key: string]: User;
}
