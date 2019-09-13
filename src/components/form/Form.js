// Core
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
// Hooks
import { useSelector, useDispatch } from "react-redux";
// Actions
import {addTodo, updateTodo} from "../../redux/actions/todosActions";
// Animation
import * as Animatable from "react-native-animatable";
// Icons
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
// UUID
import uuid from "uuid/v1";
import SubmitButton from "./SubmitButton";
// Components


export const Form = (todo, editTodo) => {
  const dispatch = useDispatch();

  const date = getDate();
  const id = uuid();

  const state = useSelector(state => state.todosReducer);
  const formStatus = state.formStatus;

  return (
    <View>
      {!editTodo.bool
        // Add Todo Form
        ? <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="Add todo"
              value={todo.todo}
              onChangeText={todoText => todo.setTodo(todoText)}
              style={styles.addInput}
              onSubmitEditing={() => {
                if (todo.todo) {
                  dispatch(addTodo(id, todo.todo, date));
                  todo.setTodo('');
                }
              }}
            />
            <SubmitButton/>
            {formStatus === 'loading'
              // Loading Button
              ? <View style={styles.spinnerIconContainer}>
                  <Animatable.View
                    animation="rotate"
                    easing="linear"
                    iterationCount="infinite"
                  >
                    <AntDesign name="loading2" style={styles.spinnerIcon}/>
                  </Animatable.View>
                </View>
              // Add Button
              : <TouchableOpacity onPress={() => {
                  if (todo) {
                    dispatch(addTodo(id, todo, date));
                    setTodo('');
                  }
                }}>
                  <MaterialIcons name="add" style={styles.addIcon}/>
                </TouchableOpacity>
            }
          </View>
        // Edit Todo Form
        : null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  addInput: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#cdcdcd',
    paddingVertical: 10,
    paddingLeft: 10,
    marginTop: 20,
    flex: 1,
    marginRight: 10
  },
  spinnerIconContainer: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#cdcdcd',
    borderRadius: 4,
    padding: 10,
    marginTop: 20
  },
  addIcon: {
    fontSize: Platform.OS === 'ios' ? 20 : 22,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#cdcdcd',
    borderRadius: 4,
    padding: Platform.OS === 'android' ? 12 : 10,
    color: '#575757',
    marginTop: 20
  },
  spinnerIcon: {
    fontSize: 20,
    color: '#575757'
  },
  error: {
    alignSelf: 'center',
    fontSize: 16,
    flex: 10
  }
});

const getDate = () => {
  let today = new Date();
  let day = today.getDate() < 10
    ? '0' + today.getDate()
    : today.getDate();
  let month = (today.getMonth() + 1) < 10
    ? '0' + (today.getMonth() + 1)
    : today.getMonth() + 1;
  let year = today.getFullYear();

  return day + '-' + month + '-' + year;
};

export default Form;
