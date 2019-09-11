//
// Initial state
//
const initialState = [
  {
    id: '',
    todo: '',
    completed: false
  }
];

//
// Reducer
//
const todosReducer = (state = initialState, action) => {
  switch(action.type){
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
