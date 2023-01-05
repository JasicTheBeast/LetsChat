//YOUR FIREBASE LINKS
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




function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
