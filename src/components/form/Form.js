// Core
import React from 'react';
import { View, StyleSheet } from 'react-native';
// Components
import SubmitButton from "./SubmitButton";
import Input from "./Input";
// UUID
import uuid from "uuid/v1";


export const Form = ({todo, setTodo, updateID, setUpdateID, date}) => {
  const id = uuid();
  return (
    <View style={{flexDirection: 'row'}}>
      <Input
        todo={todo}
        setTodo={todoText => setTodo(todoText)}
        newID={id}
        date={date}
        updateID={updateID}
        setUpdateID={id => setUpdateID(id)}
      />
      <SubmitButton
        todo={todo}
        setTodo={singleTodo => setTodo(singleTodo)}
        newID={id}
        date={date}
        updateID={updateID}
        setUpdateID={id => setUpdateID(id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Form;
