export { type User, type SavedUser } from './user';
export { type Notes } from './notes';

export interface SignInValues {
  password: string;
  email: string;
}
export interface SignUpvalues extends SignInValues {
  first_name: string;
  last_name: string;
}
