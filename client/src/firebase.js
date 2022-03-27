import firebase from 'firebase/app';
import 'firebase/firebase-storage';
import 'firebase/auth';
import 'firebase/firebase-database';

const firebaseConfig = {
  apiKey: 'AIzaSyDnFEb9B3xQPXo05bwhjTRAfl4R50Lesp8',
  authDomain: 'moments-9f317.firebaseapp.com',
  databaseURL: 'https://moments-9f317.firebaseio.com',
  projectId: 'moments-9f317',
  storageBucket: 'moments-9f317.appspot.com',
  messagingSenderId: '422166687187',
  appId: '1:422166687187:web:bfc199c111910f55af9326',
  measurementId: 'G-HDKDCDNTFC',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();

export default firebaseApp;
