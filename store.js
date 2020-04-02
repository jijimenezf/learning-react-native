import { createStore } from 'redux'
import { reducer } from './todoListRedux'

// Create a store using the reducer
const store = createStore(reducer);

export default store;
