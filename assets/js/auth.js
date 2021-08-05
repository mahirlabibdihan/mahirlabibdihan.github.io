const auth =  firebase.auth();

document.querySelector(".login-button").addEventListener("click",signIn);
function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);

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
function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
}
function checkStatus(){
    //active user to homepage

    auth.onAuthStateChanged((user)=>{
        if(window.location.href=="https://mahirlabibdihan.github.io/admin/"){
            if(user){
                window.location.replace("https://mahirlabibdihan.github.io/");
            }else{
                document.querySelector(".container").style.opacity = "100";
            }
        }
        else {
            if(user){
                document.querySelector(".container").style.opacity = "100";
            }else{
                window.location.replace("https://mahirlabibdihan.github.io/admin/");
            }
        }});
}