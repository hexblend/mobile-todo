//
// Initial state
//
const initialState = {
  text: 'Edit HomeScreen.js to start working on your app!'
};

//
// Reducer
//
const helloReducer = (state = initialState, action) => {
  switch(action.type){
    case 'CHANGE_TEXT':
      return {...state, text: action.payload};
    default:
      return state;
  }
};
export default helloReducer;
