var firebaseConfig = {
   apiKey: "AIzaSyCP09iOPuLtuoHRpVuHas-JS_v48HqgJLY",
   authDomain: "kwitterproject-af443.firebaseapp.com",
   databaseURL: "https://kwitterproject-af443-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "kwitterproject-af443",
   storageBucket: "kwitterproject-af443.appspot.com",
   messagingSenderId: "59479990297",
   appId: "1:59479990297:web:c4a4736bcd659e2fb88a88",
   measurementId: "G-VX36DHS9G6"
 };
 
 // Initialize Firebase

firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function addRoom()
    {
       room_name = document.getElementById("room_name").value;

       firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"     
       });

       localStorage.setItem("room_name" , room_name );
       window.location= "kwitter_page.html";

    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot){document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot)
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name:" + Room_names);
      row = "<div class='room_name' id= " + Room_names + "onclick='redirectToRoomName(this.id)' > " + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name" , name);
window.location="kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");

  window.location = "index.html";
}

