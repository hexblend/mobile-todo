// Firebase
import { addToDatabase, updateDatabase, deleteFromDatabase } from '../../api/helperFunctions';
import firebase from "firebase";
const database = firebase.database();

//
// Action Creators
//

// Loading
export const loading = () => {
  return {type: 'LOADING', payload: true};
};

// Error
export const error = msg => {
  return {type: 'ERROR', payload: msg};
};

// Get
export const getTodos = date => {
  return async dispatch => {
    dispatch(loading());
    await database
      .ref(`todos/${date}`)
      .on('value', snapshot => {
        var returnArr = [];
        snapshot.forEach(childSnapshot => {
          const item = childSnapshot.val();
          item.key = childSnapshot.key;
          returnArr.push(item);
        });
        returnArr.length === 0 && dispatch(error('No todos yet'));
        dispatch(getTodosAsync(returnArr));
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
    dispatch(error(''));
    await addToDatabase(`todos/${date}/${id}`, { id, todo, completed: false });
  };
};

// Mark completed
export const markCompleted = (id, completed, date) => {
  return async () => {
    return await updateDatabase(`todos/${date}/${id}`, {completed: !completed});
  };
};

// Remove
export const deleteTodo = (id, date) => {
  return async () => {
    return await deleteFromDatabase(`todos/${date}/${id}`);
  };
};




