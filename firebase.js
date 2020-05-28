import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBB8uvPhJAT_pHfKDIWCRQ_Oas7c9Ni0rE",
    authDomain: "backpackproject-cfcbb.firebaseapp.com",
    databaseURL: "https://backpackproject-cfcbb.firebaseio.com",
    projectId: "backpackproject-cfcbb",
    storageBucket: "backpackproject-cfcbb.appspot.com",
    messagingSenderId: "659300901405",
    appId: "1:659300901405:web:1037868884d1c400c19cf4",
    measurementId: "G-3XJF6KMDQ2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();