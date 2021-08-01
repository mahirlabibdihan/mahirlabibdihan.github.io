import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'
var firebaseConfig = {
  apiKey: "AIzaSyAwnHPPkx4GBd1QtDBsG-RbeAVj9S5F_rY",
  authDomain: "mahir-labib-dihan.firebaseapp.com",
  databaseURL: "https://mahir-labib-dihan-default-rtdb.firebaseio.com",
  projectId: "mahir-labib-dihan",
  storageBucket: "mahir-labib-dihan.appspot.com",
  messagingSenderId: "822429127975",
  appId: "1:822429127975:web:39b6aca980a4d8868b8502",
  measurementId: "G-NKMWNWNPBQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth =  firebase.auth();
const db = firebase.firestore();
db.settings({timeStampsInSnapshots: true});
export{db,auth}