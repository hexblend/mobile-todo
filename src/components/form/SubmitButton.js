// Core
import React,{Fragment} from 'react';
import {View, StyleSheet, TouchableOpacity, Platform} from 'react-native';
// Hooks
import { useSelector, useDispatch } from "react-redux";
import * as Animatable from "react-native-animatable";
// Actions
import {addTodo, updateTodo} from "../../redux/actions/todosActions";
// Icons
import {AntDesign, MaterialIcons} from "@expo/vector-icons";

export const SubmitButton = ({todo, setTodo, newID, date, updateID}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.todosReducer);
  const formStatus = state.formStatus;
  return (
    <Fragment>
      {formStatus === 'submit' &&
        <TouchableOpacity onPress={() => {
          if (todo) {
            setTodo('');
            return dispatch(addTodo(newID, todo, date));
          }
        }}>
          <MaterialIcons name="add" style={styles.Icon}/>
        </TouchableOpacity>
      }

      {formStatus === 'update' &&
        <TouchableOpacity onPress={() => {
          if (todo) {
            setTodo('');
            return dispatch(updateTodo(updateID, todo, date));
          }
        }}>
          <AntDesign name="edit" style={styles.Icon}/>
        </TouchableOpacity>
      }

      {formStatus === 'loading' &&
        <View style={styles.Icon}>
          <Animatable.View
            animation="rotate"
            easing="linear"
            iterationCount="infinite"
          >
            <AntDesign name="loading2" style={styles.spinnerIcon}/>
          </Animatable.View>
        </View>
      }
    </Fragment>
  );
};

const styles = StyleSheet.create({
  Icon: {
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
  }
});

export default SubmitButton;
