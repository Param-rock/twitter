
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyCii-OvNAanptdzKih-C-7FTq7RVsWe7bg",
      authDomain: "kwitter-new-15398.firebaseapp.com",
      projectId: "kwitter-new-15398",
      storageBucket: "kwitter-new-15398.appspot.com",
      messagingSenderId: "266002631567",
      appId: "1:266002631567:web:8d999f4483ebd0d8dcd9fa",
      measurementId: "G-72EY4YXLQB"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

     function addRoom()
     {
      room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name - " + Room_names);
      row = "<div class  = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName (this.id)'>#" + Room_names + "</div><hr>8";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",  name);
      window.location = "kwitter_page.html"
}
