import { create } from "zustand";

type State = {
  isNavOpen: boolean;
  // theme: string;
};

type Actions = {
  setIsNavOpen: () => void;
  // setTheme: (theme: string) => void;
};

// const theme = 'purple'? 'bg-purple-700':('linear'?'': '')

export const useStore = create<State & Actions>((set) => ({
  isNavOpen: false,
  // theme: theme,
  setIsNavOpen: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
  // setTheme: (theme) => set({ theme }),
}));
