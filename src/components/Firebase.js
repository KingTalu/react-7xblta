import firebase from 'firebase/app';

var config = {
  apiKey: "AIzaSyD8qpvIq6h292EMse4zlGLKk5nPedl9_jk",
  authDomain: "https://reminder-app-32fab.firebaseapp.com/",
  databaseURL: "https://reminder-app-32fab.firebaseio.com/",
  storageBucket: "reminder-app-32fab.appspot.com",
  messagingSenderId: "895141560998"
}
firebase.initializeApp(config);
export default firebase;