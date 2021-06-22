var fireBase = fireBase || firebase;
var hasInit = false;
var firebaseConfig = {
    apiKey: "AIzaSyC80LhwIPY8PBBfgXcU6aRrLHH_tjf8jzc",
    authDomain: "talentdevelopment-626e5.firebaseapp.com",
    databaseURL: "https://talentdevelopment-626e5-default-rtdb.firebaseio.com",
    projectId: "talentdevelopment-626e5",
    storageBucket: "talentdevelopment-626e5.appspot.com",
    messagingSenderId: "42823914920",
    appId: "1:42823914920:web:c21470e63fced75841399d"
  };
if(!hasInit){
    firebase.initializeApp(firebaseConfig);
    hasInit = true;
}