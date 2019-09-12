//
// Initial state
//
const initialState = [];

//
// Reducer
//
const todosReducer = (state = initialState, action) => {
  switch(action.type){
    case 'GET_TODOS':
      return state;
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.payload.id,
          todo: action.payload.todo,
          completed: false
        }
      ];
    default:
      return state;
  }
};

export default todosReducer;
