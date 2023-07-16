import Suite from '../interfaces/suite';
import { createStore } from './createStore';

interface SuiteStore {
    currentSuite: Suite | null,
    setCurrentSuite: (suite: Suite) => void
    removeCurrentSuite: () => void
};

export const useSuiteStore = createStore<SuiteStore>(
    (set) => ({
        currentSuite: null,
        setCurrentSuite: (suite) => set({ currentSuite: suite }),
        removeCurrentSuite: () => set({ currentSuite: null }),
    }), 'Suite');
