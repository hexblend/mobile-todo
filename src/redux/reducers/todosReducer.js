//
// Initial state
//
const initialState = {
  todos: [],
  formStatus: '',
  error: ''
};

//
// Reducer
//
const todosReducer = (state = initialState, action) => {
  switch(action.type){
    case 'LOADING':
      return { ...state, formStatus: action.payload };
    case 'GET_TODOS':
      return { ...state, todos: action.payload, formStatus: 'submit'};
    case 'UPDATE':
      return {...state, formStatus: 'submit'};
    case 'ERROR':
      return { ...state, error: action.payload};
    default:
      return state;
  }
};

export default todosReducer;
