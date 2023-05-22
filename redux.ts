import type { Action, AmountReducer, GoodsReducer, Store } from './types';

export function createStore (reducer: AmountReducer, initialState?: number): Store;
export function createStore (reducer: GoodsReducer, initialState?: number[]): Store;
export function createStore (reducer: (...params: any[]) => any, initialState?: number | number[]): Store {
  if (initialState === undefined) {
    initialState = reducer(undefined, {})
  }

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
