import { create } from 'zustand';

interface AddModalStore {
    isOpen: boolean;
    name?: string;
    onOpen: (name?: string) => void;
    onClose: () => void;
}

const useAddModal = create<AddModalStore>((set) => ({
    isOpen: false,
    onOpen: (name?: string) => set({ isOpen: true, name }),
    onClose: () => set({ isOpen: false })
}));

export default useAddModal;