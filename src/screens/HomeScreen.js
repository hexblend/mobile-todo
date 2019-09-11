// Core
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList } from 'react-native';
// Hooks
import { useSelector, useDispatch } from "react-redux";
// Actions
import { addTodo } from '../redux/actions/todosActions';
// UUID
import uuid from "uuid/v1";

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

const HomeScreen = () => {
  const todos = useSelector(state => state.todos);
  const [todo, setTodo] = useState(todos.todo);
  const dispatch = useDispatch();
  const id = uuid();
  const date = getDate();

  return (
    <View>
      <TextInput
        placeholder="Add todo"
        value={todo}
        onChangeText={todo => setTodo(todo)}
      />
      <Button
        title="Add todo"
        onPress={() => dispatch(addTodo(id, todo, date))}
      />
      <FlatList
        data={todos}
        renderItem={({ item }) => <Text>{item.todo}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
