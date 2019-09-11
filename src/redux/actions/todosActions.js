// Firebase
import firebase from 'firebase';
import firebaseInit from '../../api/Firebase';
firebaseInit();

//
// Action Creators
//
export const addTodo = (id, todo, date) => {
  const database =  firebase.database();
  database.ref(`todos/${date}/in_progress/${id}`).set({
    todo: todo,
    completed: false
  }).then(() => console.log(`'${todo}' was added to the todo list.`)).catch(err => console.log(err));

  return {type: 'ADD_TODO', payload: {id, todo, date}};
};



