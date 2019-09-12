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
import firebaseInit from "./src/api/firebaseInit";
firebaseInit();



const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Todos',

      headerStyle: {
        backgroundColor: '#4c5cf4',
        height: 100
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 24
      }
    },
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

