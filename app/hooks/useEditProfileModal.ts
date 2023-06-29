// useEditProfileModal.ts
import { create } from 'zustand';
import { SafeUser } from '../types';

interface EditProfileModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useEditProfileModal = create<EditProfileModalStore>((set) => ({
    isOpen: false,
    onOpen: () => {
      console.log("Opening modal"); // Check if this is logged
      set({ isOpen: true });
    },
    onClose: () => set({ isOpen: false }),
  }));
  

export default useEditProfileModal;
