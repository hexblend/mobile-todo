import React, {Fragment, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import CheckBox from 'react-native-check-box'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import {deleteTodo, markCompleted} from "../redux/actions/todosActions";

const SingleTodo = ({ todo, date, onEditItem }) => {
  const dispatch = useDispatch();

  const id = todo.id;
  const todoText = todo.todo;
  const completed = todo.completed;

  return (
    <View style={completed ? [styles.container, styles.completedContainer] : styles.container}>
      <Text style={completed ? [styles.todoItem, styles.completedTodoItem] : styles.todoItem}>{todoText}</Text>

      <View style={{flexDirection: 'row', marginTop: 2}}>
        {/* Edit */}
        {!completed &&
          <TouchableOpacity
            style={{marginRight: 15, marginTop: 2}}
            onPress={() => onEditItem(id, todoText)}
          >
            <AntDesign name="edit" size={22}/>
          </TouchableOpacity>
        }

        {/* Delete */}
        {completed &&
          <TouchableOpacity
            style={{marginRight: 15, marginTop: 1}}
            onPress={() => dispatch(deleteTodo(id, date))}
          >
            <FontAwesome name="trash-o" size={22} style={completed && {color: '#a5a5a5'}}/>
          </TouchableOpacity>
        }

        {/* Checkmark */}
        <CheckBox
          onClick={() => dispatch(markCompleted(id, completed, date))}
          isChecked={todo.completed}
          uncheckedCheckBoxColor="#1c1c1c"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderRadius: 6,
    marginTop: 10
  },
  completedContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#cdcdcd',
    backgroundColor: '#dcdcdc'
  },
  todoItem: {
    paddingVertical: 15
  },
  completedTodoItem: {
    color: '#afafaf',
  }
});

export default SingleTodo;
