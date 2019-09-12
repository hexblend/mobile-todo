import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
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
  }),
  applyMiddleware(thunk)
);
export {store};
