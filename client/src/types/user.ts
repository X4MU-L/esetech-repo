import type { Notes } from '.';
export interface User {
  id: string | undefined;
  first_name: string;
  last_name: string;
  notes: Array<Notes>;
  isAuthenticated?: boolean;
}
