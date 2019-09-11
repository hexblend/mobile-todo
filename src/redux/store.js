import { createStore, combineReducers } from 'redux';
//
// Reducers
//
import todosReducer from "./reducers/todosReducer";

//
// Store
//
const store = createStore(
  combineReducers({
    todos: todosReducer
  })
);
export {store};
