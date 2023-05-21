import type { Action } from './types';
import { createStore } from './redux.js';

const ADD = 'ADD';
const TAKE = 'TAKE';
const CLEAR = 'CLEAR';

export const actions = {
  add(value: number): Action {
    return {
      type: ADD,
      value,
    }
  },
  take(value: number): Action {
    return {
      type: TAKE,
      value,
    }
  },
  clear(): Action {
    return {
      type: CLEAR,
    }
  },
}

const amountReducer = (amount: number, action: Action): number => {
  switch (action.type) {
    case ADD: {
      if (action.value !== undefined) {
        return amount + action.value;
      }
    }

    case TAKE: {
      if (action.value !== undefined) {
        return amount - action.value;
      }
    }

    case CLEAR:
      return 0;

    default:
      return amount;
  }
};

export const store = createStore(amountReducer, 100);
