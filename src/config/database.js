import ReactDOM from 'react-dom';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBrw2SgLcrMV4EFlilA0eXoWHaGVIvQ5GY",
    authDomain: "reactfirebase-156c2.firebaseapp.com",
    databaseURL: "https://reactfirebase-156c2.firebaseio.com",
    projectId: "reactfirebase-156c2",
    storageBucket: "reactfirebase-156c2.appspot.com",
    messagingSenderId: "45637423209"
};

const database = firebase.database().ref('/posts');

export default database;