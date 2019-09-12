//
// Initial state
//
const initialState = {
  todos: [],
  loading: false
};

//
// Reducer
//
const todosReducer = (state = initialState, action) => {
  switch(action.type){
    case 'LOADING':
      return { ...state, loading: true };
    case 'ADD_TODO':
      return {...state,
        todos: [...state.todos, {
          id: action.payload.id,
          todo: action.payload.todo,
          completed: false
        }],
        loading: false
      };
    default:
      return state;
  }
};

export default todosReducer;
