import type { Action, AmountReducer, GoodsReducer, Position, PositionReducer, Store, TotalInitialState, TotalReducer } from './types';

export function createStore (reducer: AmountReducer, initialState?: number): Store;
export function createStore (reducer: GoodsReducer, initialState?: number[]): Store;
export function createStore (reducer: PositionReducer, initialState?: Position): Store;
export function createStore (reducer: (...params: any[]) => any, initialState?: number | number[] | Position): Store {
  if (initialState === undefined) {
    initialState = reducer(undefined, {});
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

export const createStore2 = (reducer: TotalReducer, initialState?: TotalInitialState) => {
  if (initialState === undefined) {
    initialState = reducer(undefined, {});
  }

  let state = initialState;
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
      callbacks.push(func);
    },
  };
};
