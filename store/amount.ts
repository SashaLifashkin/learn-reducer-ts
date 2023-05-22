import type { Action, AmountReducer } from '../types';

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
};

export const amountReducer: AmountReducer = (amount = 0, action) => {
  if ('type' in action) {
    switch (action.type) {
      case ADD: {
        if (action.value !== undefined) {
          return amount + action.value;
        }
      }
  
      case TAKE: {
        if (action.value !== undefined) {
          if (action.value > amount) {
            return 0;
          }
          return amount - action.value;
        }
      }
  
      case CLEAR:
        return 0;
  
      default:
        return amount;
    }
  } else {
    return amount;
  }
};
