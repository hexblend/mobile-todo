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
    case 'LOADING':
      return { ...state, loading: action.payload };
    case 'ERROR':
      return { ...state, error: action.payload};
    case 'GET_TODOS':
      return { ...state, todos: action.payload, loading: false};
    default:
      return state;
  }
};

export default todosReducer;
