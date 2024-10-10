import { LoaderState } from '@models/index';
import { create } from 'zustand';

export const useLoaderStore = create<LoaderState>()((set) => ({
  loader: false,
  setLoader: (loader: boolean): void => {
    set({ loader });
  },
}));
