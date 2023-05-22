import type { Action, GoodsReducer } from '../types';

const ADD = 'goods/ADD';
const TAKE = 'goods/TAKE';
const CLEAR = 'goods/CLEAR';

export const actions = {
  add(good: number): Action {
    return {
      type: ADD,
      good,
    }
  },
  take(good: number): Action {
    return {
      type: TAKE,
      good,
    }
  },
  clear(): Action {
    return {
      type: CLEAR,
    }
  },
};

export const goodsReducer: GoodsReducer = (goods = [], action) => {
// export const goodsReducer = (goods: number[] | undefined = [], action: Action): number[] => {
  if ('type' in action && action.good !== undefined) {
    switch (action.type) {
      case ADD: {
        return [...goods, action.good];
      }
  
      case TAKE: {
        return goods.filter(good => good !== action.good);
      }
  
      case CLEAR:
        return [];
  
      default:
        return goods;
    }
  } else {
    return goods;
  }
};


// export const goodsReducer: GoodsReducer = (goods = [], action) => {
// // export const goodsReducer = (goods: number[] | undefined = [], action: Action): number[] => {
//   if ('type' in action) {
//     switch (action.type) {
//       case ADD: {
//         if (action.good !== undefined) {
//           return [...goods, action.good];
//         } else {
//           return goods;
//         }
//       }
  
//       case TAKE: {
//         if (action.good !== undefined) {
//           return goods.filter(good => good !== action.good);
//         } else {
//           return goods;
//         }
//       }
  
//       case CLEAR:
//         return [];
  
//       default:
//         return goods;
//     }
//   } else {
//     return goods;
//   }
// };
