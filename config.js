import firebase from 'firebase'
require ("@firebase/firestore")


//Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyC4O9rwPY2h9OqCl8jGj2-f6ltavhPNEak",
    authDomain: "newsletter-46b29.firebaseapp.com",
    databaseURL: "https://newsletter-46b29.firebaseio.com",
    projectId: "newsletter-46b29",
    storageBucket: "newsletter-46b29.appspot.com",
    messagingSenderId: "320947710347",
    appId: "1:320947710347:web:d5fa685ced1511a53f278e"
  };


  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()