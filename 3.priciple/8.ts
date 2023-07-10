import { createStore, AnyAction } from 'redux';
let store = createStore(state => state);
interface MyAction extends AnyAction {
    age: number
}
class My2Action implements AnyAction {
    [extraProps: string]: any; type: any;
}
let action: My2Action = { type: 'increment', age: 10 };
store.dispatch(action);