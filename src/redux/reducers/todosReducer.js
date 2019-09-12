//
// Initial state
//
const initialState = {
  todos: [],
  loading: false,
  error: ''
};

//
// Reducer
//
const todosReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ERROR':
      return { ...state, error: action.payload }
    case 'LOADING':
      return { ...state, loading: true };
    case 'GET_TODOS':
      return { ...state, todos: action.payload, loading: false };
    // case 'ADD_TODO':
    //   return {...state,
    //     todos: [...state.todos, {
    //       todo: action.payload.todo,
    //       completed: false
    //     }],
    //     loading: false
    //   };
    default:
      return state;
  }
};

export default todosReducer;
