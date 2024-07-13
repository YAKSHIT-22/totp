import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useLoaderStartedStore = create(
    (set) => ({
      isStarted: false,
      setStartedStatus: (data) => set({ isStarted: { ...data } }),
    })
);