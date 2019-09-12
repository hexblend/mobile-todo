// Firebase
import { addToDatabase } from '../../api/helperFunctions';
import firebase from "firebase";
const database = firebase.database();

//
// Action Creators
//

// Loading
export const loading = () => {
  return {type: 'LOADING'};
};

// Error
export const error = msg => {
  return {type: 'ERROR', payload: msg};
};

// Get
export const getTodos = date => {
  return async dispatch => {
    dispatch(loading());
    const ref = database.ref(`todos/${date}/in_progress`);
    await ref.on('value', snapshot => {
      var returnArr = [];
      snapshot.forEach(childSnapshot => {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
      });
      dispatch(getTodosAsync(returnArr));
      returnArr.length == 0 && dispatch(error('No todos yet'));
    });
  };
};
export const getTodosAsync = todos => {
  return {type: 'GET_TODOS', payload: todos}
};
// Add
export const addTodo = (id, todo, date) => {
  return async dispatch => {
        dispatch(loading());
        await addToDatabase(
          `todos/${date}/in_progress/${id}`,
          {id, todo, completed: false}
        );
        dispatch(addTodoAsync(id, todo, date));
  };
};
export const addTodoAsync = (id, todo, date) => {
  return {type: 'ADD_TODO', payload: {id, todo, date}};
};



