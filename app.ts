import { createStore } from './redux.js';
import { actions as amountActions, amountReducer } from './store/amount.js';
import { actions as goodsActions, goodsReducer } from './store/goods.js';
import { actions as positionActions, positionReducer } from './store/position.js';

const store = createStore(amountReducer);
const store2 = createStore(goodsReducer);
const store3 = createStore(positionReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store2.subscribe(() => {
  console.log(store2.getState());
});

store3.subscribe(() => {
  console.log('movies position state', store3.getState());
});

store.dispatch(amountActions.add(100));
store.dispatch(amountActions.add(20));
store.dispatch(amountActions.take(50));
store.dispatch(amountActions.add(40));
store.dispatch(amountActions.clear());

store2.dispatch(goodsActions.add(100));
store2.dispatch(goodsActions.add(20));
store2.dispatch(goodsActions.take(100));
store2.dispatch(goodsActions.add(40));
store2.dispatch(goodsActions.clear());

// Dispatch actions to update the state
store3.dispatch(positionActions.moveRight());
store3.dispatch(positionActions.moveRight());
store3.dispatch(positionActions.moveRight());
store3.dispatch(positionActions.moveUp());
store3.dispatch(positionActions.moveLeft());
store3.dispatch(positionActions.moveDown());
