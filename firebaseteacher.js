var fireBase = fireBase || firebase;
var hasInit = false;
var firebaseConfig = {
  apiKey: "AIzaSyAJRCbU1BENtTPoDPx8i0nQk_bmjc4RmvA",
  authDomain: "teacherdetails-80d12.firebaseapp.com",
  databaseURL: "https://teacherdetails-80d12-default-rtdb.firebaseio.com",
  projectId: "teacherdetails-80d12",
  storageBucket: "teacherdetails-80d12.appspot.com",
  messagingSenderId: "349851254063",
  appId: "1:349851254063:web:810f4cf45747385d3435da"
};
if(!hasInit){
  firebase.initializeApp(firebaseConfig);
    hasInit = true;
}