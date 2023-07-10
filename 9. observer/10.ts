export default function createStore(reducer, preloadedState) {
    let state = preloadedState;
    let listeners: Function[] = [];
    function getState() {
        return state;
    }
    function subscribe(listener) {
        listeners.push(listener);
        return function () {
            const index = listeners.indexOf(listener);
            listeners.splice(index, 1);
        }
    }
    function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach(listener => listener())
    }
    dispatch({ type: '@@redux/INIT' });
    return {
        dispatch,
        subscribe,
        getState
    }
}