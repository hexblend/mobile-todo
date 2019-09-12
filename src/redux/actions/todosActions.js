// Firebase
import { addToDatabase } from '../../api/helperFunctions';

//
// Action Creators
//
export const getTodos = date => {
  return {type: 'GET_TODOS'};
};


// Add
export const addTodo = (id, todo, date) => {
  return async dispatch => {
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



