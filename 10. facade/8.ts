import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
let initialState = { number: 0 };
let reducer = (state = initialState) => state;
function createStore(reducer, preloadedState, enhancer) {
    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadedState
        preloadedState = undefined;
    }
    if (typeof enhancer !== 'undefined') {
        return enhancer(createStore)(reducer, preloadedState)
    }
}
let store = createStore(reduce, initialState, applyMiddleware(logger));
let store = applyMiddleware(logger)(createStore)(reducer, initialState);

