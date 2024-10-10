/* eslint-disable */
import { User } from '@models/index';

//function overloads
export function getItemFromLocalStorage(key: 'token'): string | null;
export function getItemFromLocalStorage(key: 'user'): User | null;
export function getItemFromLocalStorage(key: string): any | null {
  const item = localStorage.getItem(key);

  if (item === null) {
    return null;
  }
  return JSON.parse(item);
}

export const persistLSValue = <T>(key: string, value : T) => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const clearLSValue = (key:string) => {
  localStorage.removeItem(key);
}