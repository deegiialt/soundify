  import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyBFUcOF1DOOEvJslh-Pmx6G_jgTiFuo860",
    authDomain: "soundify-b86ba.firebaseapp.com",
    databaseURL: "https://soundify-b86ba.firebaseio.com",
    projectId: "soundify-b86ba",
    storageBucket: "soundify-b86ba.appspot.com",
    messagingSenderId: "950579246608"
  };
  firebase.initializeApp(config);

  export default firebase;