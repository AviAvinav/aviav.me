import { create } from "zustand";

type State = {
  isNavOpen: boolean;
};

type Actions = {
  setIsNavOpen: () => void;
};

export const useStore = create<State & Actions>((set) => ({
  isNavOpen: false,
  setIsNavOpen: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
}));
