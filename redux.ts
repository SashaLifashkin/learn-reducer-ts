import type { Action } from './types';

export const createStore = (
  reducer: (amount: number | undefined, action: Action) => number,
  initialState = reducer(undefined, {})
) => {
  let state = initialState;
  // const callbacks: Array<(...args: any[]) => any> = []
  // const callbacks: Array<(...args: unknown[]) => unknown> = []
  const callbacks: Array<(() => unknown)> = []

  return {
    getState() {
      return state;
    },
    dispatch(action: Action) {
      state = reducer(state, action);
      callbacks.forEach(f => f())
    },
    subscribe(func: (...args: unknown[]) => unknown) {
    // subscribe(func: (...args: any[]) => any) {
      callbacks.push(func);
    },
  };
};
