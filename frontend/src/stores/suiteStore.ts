import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import Suite from '../interfaces/suite';

interface SuiteStore {
    currentSuite: Suite | null,
    setCurrentSuite: (suite: Suite) => void
    removeCurrentSuite: () => void
};

// todo: remove devtools mw before production
export const useSuiteStore = create<SuiteStore>()(devtools((set) => ({
    currentSuite: null,
    setCurrentSuite: suite => set({ currentSuite: suite }),
    removeCurrentSuite: () => set({ currentSuite: null }),
})));
