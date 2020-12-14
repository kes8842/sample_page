import { action, observable } from 'mobx';
import { enableStaticRendering } from 'mobx-react';

const isServer = typeof window === 'undefined';
let store = null;
enableStaticRendering(isServer);

// Stores
import MainStore, { initialMainState } from './main';

const initialRootState = {
    mainState: initialMainState
};

export class RootStore {
    constructor(initialState) {
        this.mainStore = new MainStore(initialState.mainState);
    }
}

export default function initializeStore(initialState = initialRootState) {
    if (isServer) {
        return new RootStore(initialState);
    }
    if (store === null) {
        store = new RootStore(initialState);
    }

    return store;
}