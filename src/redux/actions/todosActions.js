// Firebase
import { addToDatabase, updateDatabase, deleteFromDatabase } from '../../api/helperFunctions';
import firebase from "firebase";
const database = firebase.database();

//
// Action Creators
//

// Loading
export const changeFormStatus = (status) => {
  return {type: 'LOADING', payload: status};
};

// Error
export const error = msg => {
  return {type: 'ERROR', payload: msg};
};

// Get
export const getTodos = date => {
  return async dispatch => {
    dispatch(changeFormStatus('loading'));
    await database
      .ref(`todos/${date}`)
      .orderByChild('timestamp')
      .on('value', snapshot => {
        this.data = [];
        snapshot.forEach(function(child) {
          this.data.push(child.val());
        }.bind(this));
        var returnArr = [];
        snapshot.forEach(childSnapshot => {
          const item = childSnapshot.val();
          item.key = childSnapshot.key;
          returnArr.unshift(item);
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
    dispatch(changeFormStatus('loading'));
    dispatch(error(''));
    await addToDatabase(`todos/${date}/${id}`, { id, todo, completed: false, timestamp: Date.now() } );
  };
};

// Mark completed
export const markCompleted = (id, completed, date) => {
  return async () => {
    return await updateDatabase(`todos/${date}/${id}`, {completed: !completed});
  };
};

// Update
export const updateTodo = (id, todo, date) => {
  return async dispatch => {
    dispatch(changeFormStatus('update'));
    await updateDatabase(`todos/${date}/${id}`, {todo});
    dispatch(updateTodoAsync());
  };
};
export const updateTodoAsync = () => {
  return {type: 'UPDATE_TODO'}
}

// Remove
export const deleteTodo = (id, date) => {
  return async () => {
    return await deleteFromDatabase(`todos/${date}/${id}`);
  };
};




