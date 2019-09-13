// Core
import React, {Fragment} from 'react';
import {TextInput, StyleSheet } from 'react-native';
// Hooks
import {useSelector, useDispatch} from "react-redux";
// Actions
import {addTodo, updateTodo} from "../../redux/actions/todosActions";

export const Input = ({todo, setTodo, newID, date, updateID}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.todosReducer);
  const formStatus = state.formStatus;
  return (
    <Fragment>
      <TextInput
        placeholder="Add todo"
        value={todo}
        onChangeText={todoText => setTodo(todoText)}
        style={styles.textInput}
        onSubmitEditing={() => {
          if (todo) {
            if(formStatus === 'submit') {
              setTodo('');
              return dispatch(addTodo(newID, todo, date));
            }
            if(formStatus === 'update') {
              setTodo('');
              return dispatch(updateTodo(updateID, todo, date));
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
