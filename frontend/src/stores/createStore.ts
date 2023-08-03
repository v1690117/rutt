import create, {
    UseBoundStore,
    GetState,
    SetState,
    State,
    StoreApi,
} from 'zustand';
import { devtools } from 'zustand/middleware';

export type Store<T extends State> = UseBoundStore<T>;

export const createStore = <T extends State>(
    fn: (set: SetState<T>, get: GetState<T>, api: StoreApi<T>) => T,
    name: string): Store<T> => {
    if (process.env.NODE_ENV === 'development') {
        return create(devtools(fn, { name }))
    }
    return create(fn);
};
