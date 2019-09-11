import { createStore, combineReducers } from 'redux';

//
// Reducers
//
import helloReducer from "./reducers/helloReducer";


//
// Actions
//


//
// Store
//
const store = createStore(
  combineReducers({
    hello: helloReducer
  })
);
export {store};
