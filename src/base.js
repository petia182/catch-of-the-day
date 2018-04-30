import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCfX2FxUW6dIUvim_QpzmZasrQ2-BdINVw",
  authDomain: "catch-of-the-day-f39bb.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-f39bb.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
