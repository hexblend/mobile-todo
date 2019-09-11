// Core
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
// Hooks
import { useSelector, useDispatch } from "react-redux";
// Actions
import { changeText } from '../redux/actions/helloActions';

const HomeScreen = () => {
  const initialText = useSelector(state => state.hello.text);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>{initialText}</Text>
      <Button
        title="Change state"
        onPress={() => dispatch(changeText('Hello world!'))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

// Optional individual page name (default set in App.js)
// HomeScreen.navigationOptions = () => ({
//   title: 'Home page'
// });

export default HomeScreen;
