import { create } from 'zustand';
import { SafeBook } from '../types';

interface EditModalStore {
  isOpen: boolean;
  book: SafeBook | null;
  onOpen: (book: SafeBook) => void;
  onClose: () => void;
}

const useEditModal = create<EditModalStore>((set) => ({
  isOpen: false,
  book: null,
  onOpen: (book) => set({ isOpen: true, book }),
  onClose: () => set({ isOpen: false, book: null }),
}));

export default useEditModal;
