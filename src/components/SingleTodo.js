import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SingleTodo = ({ todo }) => {
  return (
    <View style={todo ? styles.container : null}>
      {todo ? <Text style={styles.todoItem}>{todo}</Text> : null }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#cdcdcd',
  },
  todoItem: {
    paddingVertical: 15,
    paddingHorizontal: 5,
  }
});

export default SingleTodo;
