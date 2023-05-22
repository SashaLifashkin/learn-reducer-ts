import type { Action, AmountReducer, GoodsReducer, Position, PositionReducer, Reducers, Store, TotalInitialState, TotalReducer, TotalState } from './types';

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

export const combineReducers = (reducers: Reducers) => {
  return (state: TotalInitialState = {}, action: Action) => {
    // const result: TotalState = {
    //   amount: 0,
    //   goods: [],
    //   position: { x: 0, y: 0 },
    // };
    const result: { [key: string]: number | number[] | Position } = {};

    for (const key in reducers) {
      if (reducers.hasOwnProperty(key)) {
        result[key] = reducers[key as keyof Reducers](state[key as keyof TotalInitialState], action);
        // const resultKey = key as keyof TotalState;
        // const reducerKey = key as keyof Reducers;
        // const stateKey = key as keyof TotalInitialState

        // if (resultKey === 'amount' && reducerKey === 'amount' && stateKey === 'amount') {
        //   result[resultKey] = reducers[reducerKey](state[stateKey], action);
        // } else if (resultKey === 'goods' && reducerKey === 'goods' && stateKey === 'goods') {
        //   result[resultKey] = reducers[reducerKey](state[stateKey], action);
        // } else if (resultKey === 'position' && reducerKey === 'position' && stateKey === 'position') {
        //   result[resultKey] = reducers[reducerKey](state[stateKey], action);
        // }
      }
    }

    return result;
  };
};
