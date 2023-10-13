import { createStore } from './createStore';

interface FileStore {
    currentFile: string | null,
    setCurrentFile: (file: string) => void
    removeCurrentFile: () => void
};

export const useFileStore = createStore<FileStore>(
    (set) => ({
        currentFile: null,
        setCurrentFile: (file) => set({ currentFile: file }),
        removeCurrentFile: () => set({ currentFile: null }),
    }), 'File');
