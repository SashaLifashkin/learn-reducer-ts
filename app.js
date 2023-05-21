import { store, actions } from './store.js';
store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(actions.add(20));
store.dispatch(actions.take(50));
store.dispatch(actions.add(40));
store.dispatch(actions.clear());
