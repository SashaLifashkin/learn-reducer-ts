let amount = 100;
console.log(amount);

type Action = {
  type: string;
  value?: number;
}

const amountReducer = (amount: number, action: Action): number => {
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

const createStore = (reducer: (amount: number, action: Action) => number, initialState: number) => {
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

const store1 = createStore(amountReducer, 100);

store1.subscribe(() => {
  console.log(store1.getState());
});

store1.dispatch({ type: 'add', value: 20});
store1.dispatch({ type: 'take', value: 50});
store1.dispatch({ type: 'add', value: 40});
store1.dispatch({ type: 'clear'});
