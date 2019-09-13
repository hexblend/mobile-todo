
// Core
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from "react-redux";

export const SubmitButton = () => {
  const state = useSelector(state => state.todosReducer);
  const formStatus = state.formStatus;
  return (
    <View>
      {formStatus === 'submit' &&
        <Text>Submit</Text>
      }
      {formStatus === 'update' &&
        <Text>Update</Text>
      }
      {formStatus === 'loading' &&
        <Text>Loading</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({});

export default SubmitButton;
