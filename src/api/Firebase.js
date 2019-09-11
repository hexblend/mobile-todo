import firebase from "firebase";

const firebaseInit = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyC7HTXLIzZZmew9kloPqWUNYeB400jX3z4",
    authDomain: "react-native-todo-61929.firebaseapp.com",
    databaseURL: "https://react-native-todo-61929.firebaseio.com",
    projectId: "react-native-todo-61929",
    storageBucket: "",
    messagingSenderId: "703311648435",
    appId: "1:703311648435:web:e52371a41740d5c09482c6"
  };
  return firebase.initializeApp(firebaseConfig);
};

export default firebaseInit;
