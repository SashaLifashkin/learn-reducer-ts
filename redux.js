export function createStore(reducer, initialState) {
    if (initialState === undefined) {
        initialState = reducer(undefined, {});
    }
    let state = initialState;
    // const callbacks: Array<(...args: any[]) => any> = []
    // const callbacks: Array<(...args: unknown[]) => unknown> = []
    const callbacks = [];
    return {
        getState() {
            return state;
        },
        dispatch(action) {
            state = reducer(state, action);
            callbacks.forEach(f => f());
        },
        subscribe(func) {
            // subscribe(func: (...args: any[]) => any) {
            callbacks.push(func);
        },
    };
}
;
export const createStore2 = (reducer, initialState) => {
    if (initialState === undefined) {
        initialState = reducer(undefined, {});
    }
    let state = initialState;
    const callbacks = [];
    return {
        getState() {
            return state;
        },
        dispatch(action) {
            state = reducer(state, action);
            callbacks.forEach(f => f());
        },
        subscribe(func) {
            callbacks.push(func);
        },
    };
};
export const combineReducers = (reducers) => {
    return (state = {}, action) => {
        // const result: TotalState = {
        //   amount: 0,
        //   goods: [],
        //   position: { x: 0, y: 0 },
        // };
        const result = {};
        for (const key in reducers) {
            if (reducers.hasOwnProperty(key)) {
                result[key] = reducers[key](state[key], action);
                // const resultKey = key as keyof TotalState;
                // const reducerKey = key as keyof Reducers;
                // const stateKey = key as keyof TotalInitialState
                // if (resultKey === 'amount' && reducerKey === 'amount' && stateKey === 'amount') {
                //   result[resultKey] = reducers[reducerKey](state[stateKey], action);
                // } else if (resultKey === 'goods' && reducerKey === 'goods' && stateKey === 'goods') {
                //   result[resultKey] = reducers[reducerKey](state[stateKey], action);
                // } else if (resultKey === 'position' && reducerKey === 'position' && stateKey === 'position') {
                //   result[resultKey] = reducers[reducerKey](state[stateKey], action);
                // }
            }
        }
        return result;
    };
};
