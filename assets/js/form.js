
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    checkStatus();
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  
  function checkStatus(){
    //active user to homepage
  auth.onAuthStateChanged((user)=>{
    if(window.location.href=="https://mahir-labib-dihan.web.app/admin/"){
    if(user){
      window.location.replace("https://mahir-labib-dihan.web.app/");
    }else{
      document.body.style.display="block";
    }
  }
  else {
    if(user){
      document.body.style.display="block";
    }else{
      window.location.replace("https://mahir-labib-dihan.web.app/admin/");
    }
  }})
  }

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  checkStatus();
  db.settings({timeStampsInSnapshots: true});
  export{db}