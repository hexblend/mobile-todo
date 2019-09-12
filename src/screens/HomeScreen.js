// Core
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, StatusBar, TouchableOpacity } from 'react-native';
// Hooks
import { useSelector, useDispatch } from "react-redux";
// Actions
import { addTodo } from '../redux/actions/todosActions';
// UUID
import uuid from "uuid/v1";
// Icons
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
// Components
import SingleTodo from "../components/SingleTodo";
// Animation
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const date = getDate();
  const id = uuid();

  const state = useSelector(state => state.todosReducer);
  const todos = state.todos;
  const loading = state.loading;


  const [todo, setTodo] = useState('');
  return (
    <View style={styles.container}>
      {/* Signal Bar */}
      <StatusBar barStyle="light-content"/>
      {/* Input */}
      <TextInput
        placeholder="Add todo"
        value={todo}
        onChangeText={todo => setTodo(todo)}
        style={styles.searchInput}
      />

      {/* Add/Loading button */}
      {loading
        ? <View style={styles.spinnerIconContainer}>
            <Animatable.View
              animation="rotate"
              easing="linear"
              iterationCount="infinite"
            >
              <AntDesign name="loading2" style={styles.spinnerIcon}/>
            </Animatable.View>
          </View>
        : <TouchableOpacity onPress={() => {
            if (todo) {
              dispatch(addTodo(id, todo, date));
              setTodo('');
            }
          }}>
            <MaterialIcons name="add" style={styles.addIcon}/>
          </TouchableOpacity>
      }


      {/* Section title */}
      {todos.length > 0 ? <Text style={styles.sectionTitle}>In Progress:</Text> : null}
      {/* Todo list */}
      <FlatList
        data={todos}
        renderItem={ ({ item }) => <SingleTodo key={item.id} todo={item.todo} /> }
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
  spinnerIconContainer: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#cdcdcd',
    borderRadius: 4,
    padding: 10,
    marginTop: 20
  },
  spinnerIcon: {
    fontSize: 24,
    color: '#575757'
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
