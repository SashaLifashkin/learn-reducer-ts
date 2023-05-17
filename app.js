"use strict";
let amount = 100;
console.log(amount);
const amountReducer = (amount, action) => {
    switch (action.type) {
        case 'add': {
            if (action.value !== undefined) {
                return amount + action.value;
            }
        }
        case 'take': {
            if (action.value !== undefined) {
                return amount - action.value;
            }
        }
        case 'clear':
            return 0;
        default:
            return amount;
    }
};
const action1 = { type: 'add', value: 20 };
amount = amountReducer(amount, action1);
console.log(amount);
const action2 = { type: 'take', value: 50 };
amount = amountReducer(amount, action2);
console.log(amount);
const action3 = { type: 'add', value: 40 };
amount = amountReducer(amount, action3);
console.log(amount);
const action4 = { type: 'clear' };
amount = amountReducer(amount, action4);
console.log(amount);
