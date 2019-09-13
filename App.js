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
// Fix for 'Setting a timer' warning on anroid
console.ignoredYellowBox = ['Setting a timer'];

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Todos',

      headerStyle: {
        backgroundColor: '#685df4',
        // height: 50
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 22
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

