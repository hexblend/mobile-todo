// Firebase
import { addToDatabase } from '../../api/helperFunctions';

//
// Action Creators
//

// Loading
export const loading = () => {
  return {type: 'LOADING'};
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



