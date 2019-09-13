// Core
import React from 'react';
import { View, StyleSheet } from 'react-native';
// Components
import SubmitButton from "./SubmitButton";
import Input from "./Input";
// UUID
import uuid from "uuid/v1";


export const Form = (todo) => {
  const date = todo.date;
  const id = uuid();
  return (
    <View style={{flexDirection: 'row'}}>
      <Input
        todo={todo.todo}
        setTodo={todoText => todo.setTodo(todoText)}
        id={id}
        date={date}
        updateID={todo.updateID}
        setUpdateID={id => todo.setUpdateID(id)}
      />
      <SubmitButton
        todo={todo.todo}
        setTodo={singleTodo => todo.setTodo(singleTodo)}
        id={id}
        date={date}
        updateID={todo.updateID}
        setUpdateID={id => todo.setUpdateID(id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Form;
