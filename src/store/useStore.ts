import { create } from 'zustand';

interface AppState {
  isNewsletterModalOpen: boolean;
  openNewsletterModal: () => void;
  closeNewsletterModal: () => void;
}

export const useStore = create<AppState>((set) => ({
  isNewsletterModalOpen: false,
  openNewsletterModal: () => set({ isNewsletterModalOpen: true }),
  closeNewsletterModal: () => set({ isNewsletterModalOpen: false }),
}));
