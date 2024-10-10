/* eslint-disable no-unused-vars */
import { User } from './user';

export interface AuthState {
  token: string | null;
  user: User | null;
  login: (username: string) => void;
  logout: () => void;
}
