const ADD = 'amount/ADD';
const TAKE = 'amount/TAKE';
const CLEAR = 'amount/CLEAR';
export const actions = {
    add(value) {
        return {
            type: ADD,
            value,
        };
    },
    take(value) {
        return {
            type: TAKE,
            value,
        };
    },
    clear() {
        return {
            type: CLEAR,
        };
    },
};
export const amountReducer = (amount = 0, action) => {
    if ('type' in action && action.value !== undefined) {
        switch (action.type) {
            case ADD: {
                return amount + action.value;
            }
            case TAKE: {
                if (action.value > amount) {
                    return 0;
                }
                return amount - action.value;
            }
            case CLEAR:
                return 0;
            default:
                return amount;
        }
    }
    else {
        return amount;
    }
};
// export const amountReducer: AmountReducer = (amount = 0, action) => {
//   if ('type' in action) {
//     switch (action.type) {
//       case ADD: {
//         if (action.value !== undefined) {
//           return amount + action.value;
//         } else {
//           return amount;
//         }
//       }
//       case TAKE: {
//         if (action.value !== undefined) {
//           if (action.value > amount) {
//             return 0;
//           }
//           return amount - action.value;
//         } else {
//           return amount;
//         }
//       }
//       case CLEAR:
//         return 0;
//       default:
//         return amount;
//     }
//   } else {
//     return amount;
//   }
// };
