import { create } from 'zustand';

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
  onClose: () => {
    console.log("Closing modal"); // Check if this is logged
    set({ isOpen: false });
  },
}));

export default useEditProfileModal;
