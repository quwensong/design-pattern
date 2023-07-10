import { createStore } from 'redux';
function reducer(state: any, action: any) {
    return state;
}
/**
 * redux应用里，只会有一个仓库，它是单例的
 * 为了实现可以组件通信，仓库必须 是单例的，只有一个
 */
let store = createStore(reducer);
export default store;
