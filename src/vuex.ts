import { InjectionKey } from 'vue';
import { createStore, Store, useStore as _useStore } from 'vuex';
import { version as DRMCASTR_VERSION } from './const';

export interface State {
  song?: string

  artists?: string[]

  playing: boolean

  /**
   * Should be 0-100
   */
  volume: number

  version: string
}

export const storeKey: InjectionKey<Store<State>> = Symbol('STORE_INJECTION_KEY');

export default createStore<State>({
  state: {
    playing: false,
    volume: 50,
    version: DRMCASTR_VERSION,
  },
  mutations: {
    initializeStore(state) {
      // eslint-disable-next-line
      let newObject: any = {};

      (['volume'] as (keyof State)[]).forEach((x) => {
        newObject[x] = localStorage.getItem(x) ?? state[x];
      });

      newObject = Object.assign(state, newObject);

      if (newObject.version === DRMCASTR_VERSION) {
        this.replaceState(newObject);
      }
    },
  },
});

export const useStore = () => _useStore(storeKey);
