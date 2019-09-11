// Core
import React, { useEffect } from 'react';
// Redux
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
// Navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// Screens
import HomeScreen from './src/screens/HomeScreen'
// Firebase
import firebase from 'firebase';


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Todo List'
    }
  },
);

const App = createAppContainer(AppNavigator);

export default () => {
  useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyC7HTXLIzZZmew9kloPqWUNYeB400jX3z4",
      authDomain: "react-native-todo-61929.firebaseapp.com",
      databaseURL: "https://react-native-todo-61929.firebaseio.com",
      projectId: "react-native-todo-61929",
      storageBucket: "",
      messagingSenderId: "703311648435",
      appId: "1:703311648435:web:e52371a41740d5c09482c6"
    };
    firebase.initializeApp(firebaseConfig);
  }, []);
  console.log(firebase);
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

