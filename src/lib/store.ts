import { create } from "zustand";

interface useStore {
  bears: number;
  increasePopulation: () => void;
  decreasePopulation: () => void;
  removeAllBears: () => void;
}

interface useSidebarStore {
  isOpen: boolean;
  profileOpen: boolean;
  toggleSidebar: () => void;
  toggleProfile: () => void;
}

export const useStore = create<useStore>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  decreasePopulation: () =>
    set((state) => ({ bears: state.bears > 0 ? state.bears - 1 : 0 })),
}));

export const useSidebarStore = create<useSidebarStore>((set) => ({
  isOpen: false,
  profileOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  toggleProfile: () => set((state) => ({ profileOpen: !state.profileOpen })),
}));
