// Core
import React, {Fragment} from 'react';
import {TextInput, StyleSheet } from 'react-native';
// Hooks
import {useSelector, useDispatch} from "react-redux";
// Actions
import {addTodo, updateTodo} from "../../redux/actions/todosActions";

export const Input = (todo) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.todosReducer);
  const formStatus = state.formStatus;

  console.log(todo);
  return (
    <Fragment>
      <TextInput
        placeholder="Add todo"
        value={todo.todo}
        onChangeText={todoText => todo.setTodo(todoText)}
        style={styles.textInput}
        onSubmitEditing={() => {
          if (todo.todo) {
            if(formStatus === 'submit') {
              todo.setTodo('');
              return dispatch(addTodo(todo.id, todo.todo, todo.date));
            }
            if(formStatus === 'update') {
              todo.setTodo('');
              return dispatch(updateTodo(todo.updateID, todo.todo, todo.date));
            }
          }
        }}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#cdcdcd',
    paddingVertical: 10,
    paddingLeft: 10,
    marginTop: 20,
    flex: 1,
    marginRight: 10
  },
});

export default Input;
