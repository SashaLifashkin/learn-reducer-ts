import type { Action, TotalInitialState, TotalReducer } from './types';
import { combineReducers, createStore, createStore2 } from './redux.js';
import { actions as amountActions, amountReducer } from './store/amount.js';
import { actions as goodsActions, goodsReducer } from './store/goods.js';
import { actions as positionActions, positionReducer } from './store/position.js';

const totalInitialState: TotalInitialState = {
  amount: 99,
  goods: [101],
  position: { x: 0, y: 0 },
};

const reducer2 = combineReducers({
  amount: amountReducer,
  goods: goodsReducer,
  position: positionReducer
});

const store4 = createStore2(reducer2, totalInitialState);

console.log(store4.getState());

// =====================================================

// const totalReducer: TotalReducer = (state: TotalInitialState = {}, action: Action) => {
//   return {
//     amount: 'amount' in state ? amountReducer(state.amount, action) : amountReducer(undefined, {}),
//     goods: 'goods' in state ? goodsReducer(state.goods, action) : goodsReducer(undefined, {}),
//     position: 'position' in state ? positionReducer(state.position, action) : positionReducer(undefined, {}),
//   };
// };

// const totalStore = createStore2(totalReducer, totalInitialState);

// totalStore.subscribe(() => {
//   console.log(totalStore.getState());
// });

// totalStore.dispatch(positionActions.moveRight());
// totalStore.dispatch(amountActions.add(50));
// totalStore.dispatch(amountActions.take(20));
// totalStore.dispatch(goodsActions.add(100));

// ========================================================
// const totalInitialState: TotalInitialState = {
//   amount: 0,
//   goods: [],
//   position: { x: 0, y: 0 },
// };

// const totalReducer: TotalReducer = (state: TotalInitialState = totalInitialState, action: Action) => {
//   if ('type' in action) {
//     return {
//       amount: amountReducer(state.amount, action),
//       goods: goodsReducer(state.goods, action),
//       position: positionReducer(state.position, action),
//     };
//   } else {
//     return state;
//   }
// };

// const totalStore = createStore2(totalReducer);

// totalStore.subscribe(() => {
//   console.log(totalStore.getState());
// });

// totalStore.dispatch(positionActions.moveRight());
// totalStore.dispatch(amountActions.add(50));
// totalStore.dispatch(amountActions.take(20));
// totalStore.dispatch(goodsActions.add(100));

// =======================================================

// const store = createStore(amountReducer);
// const store2 = createStore(goodsReducer);
// const store3 = createStore(positionReducer);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store2.subscribe(() => {
//   console.log(store2.getState());
// });

// store3.subscribe(() => {
//   console.log('movies position state', store3.getState());
// });

// store.dispatch(amountActions.add(100));
// store.dispatch(amountActions.add(20));
// store.dispatch(amountActions.take(50));
// store.dispatch(amountActions.add(40));
// store.dispatch(amountActions.clear());

// store2.dispatch(goodsActions.add(100));
// store2.dispatch(goodsActions.add(20));
// store2.dispatch(goodsActions.take(100));
// store2.dispatch(goodsActions.add(40));
// store2.dispatch(goodsActions.clear());

// // Dispatch actions to update the state
// store3.dispatch(positionActions.moveRight());
// store3.dispatch(positionActions.moveRight());
// store3.dispatch(positionActions.moveRight());
// store3.dispatch(positionActions.moveUp());
// store3.dispatch(positionActions.moveLeft());
// store3.dispatch(positionActions.moveDown());
