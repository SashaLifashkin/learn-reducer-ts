export const createStore = (reducer, initialState) => {
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
};