// Core
import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList, StatusBar, TouchableOpacity } from 'react-native';
// Hooks
import { useSelector, useDispatch } from "react-redux";
// Actions
import { getTodos, addTodo } from '../redux/actions/todosActions';
// UUID
import uuid from "uuid/v1";
// Icons
import { MaterialIcons } from '@expo/vector-icons';
// Components
import SingleTodo from "../components/SingleTodo";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const date = getDate();
  const id = uuid();

  useEffect(() => {
    dispatch(getTodos(date));
  }, []);

  const todos = useSelector(state => state.todos);
  const [todo, setTodo] = useState(todos.todo);

  return (
    <View style={styles.container}>
      {/* Signal Bar */}
      <StatusBar barStyle="light-content"/>
      {/* Add Todo Input */}
      <TextInput
        placeholder="Add todo"
        value={todo}
        onChangeText={todo => setTodo(todo)}
        style={styles.searchInput}
      />
      {/* Add Todo Button */}
      <TouchableOpacity onPress={() => {
        if (todo) {
          dispatch(addTodo(id, todo, date));
          setTodo('');
        }
      }}>
        <MaterialIcons name="add" style={styles.addIcon}/>
      </TouchableOpacity>

      {/* Section title */}
      {todos.length > 0 ? <Text style={styles.sectionTitle}>In Progress:</Text> : null}
      {/* Todo list */}
      <FlatList
        data={todos}
        renderItem={ ({ item }) => <SingleTodo todo={item.todo} /> }
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  },
  addIcon: {
    fontSize: 24,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#cdcdcd',
    borderRadius: 4,
    padding: 10,
    color: '#575757',
    marginTop: 20
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#cdcdcd',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: 15
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20
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

export default HomeScreen;
