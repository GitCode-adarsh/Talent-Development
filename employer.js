var fireBase = fireBase || firebase;
var hasInit = false;
var firebaseConfig = {
  apiKey: "AIzaSyAn9COma8wTAALpL1tBzmL23fUYDWmMKlQ",
  authDomain: "academy-f16f8.firebaseapp.com",
  databaseURL: "https://academy-f16f8-default-rtdb.firebaseio.com",
  projectId: "academy-f16f8",
  storageBucket: "academy-f16f8.appspot.com",
  messagingSenderId: "693537956627",
  appId: "1:693537956627:web:613bb2e87d3a1b7e5a30e6"
};
if(!hasInit){
  firebase.initializeApp(firebaseConfig);
    hasInit = true;
}