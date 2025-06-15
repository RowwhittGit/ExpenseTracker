import {create} from 'zustand';

export const useCountStore = create((set, get) => ({
  count: 0,
  incCount: () => set((state) => ({ count: state.count + 1 })),
  decCount: () => set((state) => ({ count: state.count - 1 })),
  // you can't directly access `count` in the store function, so we use get() to retrieve the current count
  isEven: () => get().count % 2 === 0,
}));
