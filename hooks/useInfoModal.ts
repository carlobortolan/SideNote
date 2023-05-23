import { create } from "zustand";

export interface ModalStoreInterface {
  trailerId?: string;
  isOpen: boolean;
  openModal: (trailerId: string) => void;
  closeModal: () => void;
}

const useInfoModal = create<ModalStoreInterface>((set) => ({
  trailerId: undefined,
  isOpen: false,
  openModal: (trailerId: string) => set({ isOpen: true, trailerId }),
  closeModal: () => set({ isOpen: false, trailerId: undefined }),
}));

export default useInfoModal;
