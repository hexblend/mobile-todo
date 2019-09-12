import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// Firebase
import firebaseInit from "../api/firebaseInit";
firebaseInit();

//
// Reducers
//
import todosReducer from "./reducers/todosReducer";

//
// Store
//
const store = createStore(
  combineReducers({
    todosReducer
  }),
  applyMiddleware(thunk)
);
export {store};
