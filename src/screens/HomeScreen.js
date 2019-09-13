// Core
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar, SafeAreaView } from 'react-native';
// Hooks
import { useSelector, useDispatch } from "react-redux";
// Actions
import {changeFormStatus, getTodos} from '../redux/actions/todosActions';
// Components
import SingleTodo from "../components/SingleTodo";
import Form from "../components/form/Form";
import Error from "../components/Error";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const date = getDate();

  useEffect(() => {
    dispatch(getTodos(date));
  }, []);

  const state = useSelector(state => state.todosReducer);
  const todos = state.todos;
  const error = state.error;

  const [todo, setTodo] = useState('');
  const [updateID, setUpdateID] = useState('');
  return (
    <View style={styles.container}>
      {/* Signal Bar */}
      <StatusBar barStyle="light-content"/>

      {/* Form */}
      <Form
        todo={todo}
        setTodo={todo => setTodo(todo)}
        updateID={updateID}
        setUpdateID={id => setUpdateID(id)}
        date={date}
      />

      {/* Section title */ }
      {todos.length > 0 ? <Text style={styles.sectionTitle}>In Progress:</Text> : null}

      {/* Todo list */}
      <SafeAreaView style={{flex:1, marginBottom: 10}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={todos}
          renderItem={ ({ item }) => <SingleTodo
            todo={item}
            date={date}
            onEditItem={(todoID, todoText) => {
              setTodo(todoText);
              setUpdateID(todoID);
              dispatch(changeFormStatus('edit'))
            }} /> }
          keyExtractor={(item, index) => item.key}
        />
      </SafeAreaView>

      {/* Error */}
      {error ? <Error message="No todos yet" /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10
  },
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
