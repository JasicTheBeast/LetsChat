// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAtxY7epBqZTAyMSi7oTEl7A0lrYSDgC4Q",
    authDomain: "kwitter-base-8878a.firebaseapp.com",
    databaseURL: "https://kwitter-base-8878a-default-rtdb.firebaseio.com",
    projectId: "kwitter-base-8878a",
    storageBucket: "kwitter-base-8878a.appspot.com",
    messagingSenderId: "852426983012",
    appId: "1:852426983012:web:68022f686fd88d4a25c171"
  };
  
  


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



