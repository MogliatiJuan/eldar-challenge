/* eslint-disable no-magic-numbers */
import { create } from 'zustand';
import { AuthState, JWTPayload, keysLS, User } from '@models/index';
import {
  clearLSValue,
  createFakeJWT,
  getItemFromLocalStorage,
  persistLSValue,
} from '@utilities/index';

export const useAuthStore = create<AuthState>()((set) => ({
  token: getItemFromLocalStorage(keysLS.token),
  user: getItemFromLocalStorage(keysLS.user),

  login: (username: string) => {
    const token = createFakeJWT(username);

    const payload = JSON.parse(atob(token.split('.')[1])) as JWTPayload;
    const user: User = {
      id: Math.floor(Math.random() * 1000),
      username: payload.username,
      email: `${payload.username}@example.com`,
      role: payload.role,
    };
    persistLSValue(keysLS.token, token);
    persistLSValue(keysLS.user, user);
    set({ token, user });
  },
  logout: () => {
    set({ token: null, user: null });
    clearLSValue(keysLS.token);
    clearLSValue(keysLS.user);
  },
}));
