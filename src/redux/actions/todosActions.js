// Firebase
import { addToDatabase } from '../../api/helperFunctions';
import firebase from "firebase";

//
// Action Creators
//
export const getTodos = date => {
  return {type: 'GET_TODOS'};
};

export const addTodo = (id, todo, date) => {
  // addToDatabase(
  //   `todos/${date}/in_progress/${id}`,
  //   {id, todo, completed: false}
  // );
  return {type: 'ADD_TODO', payload: {id, todo, date}};
};



