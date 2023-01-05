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


     user_name = localStorage.getItem('user_name');

     document.getElementById("user_name").innerHTML = "Welcome!   " + user_name + " !!!";
     
function addroom()
     {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
     

      localStorage.setItem("room_name",room_name)

      window.location = "kwitter_page.html";

     }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_names")
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;


      //End code
      });});}
getData();




function logout ()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}