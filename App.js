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
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

