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
const createStore = (reducer, initialState) => {
    let state = initialState;
    return {
        getState() {
            return state;
        },
        dispatch(action) {
            state = reducer(state, action);
        },
    };
};
const store1 = createStore(amountReducer, 100);
store1.dispatch({ type: 'add', value: 20 });
console.log(store1.getState());
store1.dispatch({ type: 'take', value: 50 });
console.log(store1.getState());
store1.dispatch({ type: 'add', value: 40 });
console.log(store1.getState());
store1.dispatch({ type: 'clear' });
console.log(store1.getState());
