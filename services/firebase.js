import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDggm4anqWv4XOQWjW7inVrNV0rlZFk5qE",
  authDomain: "react-native-expo-app.firebaseapp.com",
  databaseURL: "https://react-native-expo-app.firebaseio.com",
  projectId: "react-native-expo-app",
  storageBucket: "react-native-expo-app.appspot.com",
  messagingSenderId: "995768595707",
  appId: "1:995768595707:web:eba8f409504d09065aec5e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);