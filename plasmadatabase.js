var firebaseConfig = {
    apiKey: "AIzaSyDWgsTxwU06aoZGfVDA0GWNfGKScoUWqrc",
    authDomain: "sasacovid19help.firebaseapp.com",
    databaseURL: "https://sasacovid19help-default-rtdb.firebaseio.com",
    projectId: "sasacovid19help",
    storageBucket: "sasacovid19help.appspot.com",
    messagingSenderId: "557137923179",
    appId: "1:557137923179:web:250b853a371979e568752e"
  };
try {
    firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log("Error");
}  
var messagesRef = firebase.database().ref('plasmadatabase');

$('#contactForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('#FullName').val(),
        email: $('#Email').val(),
        phone: $('#Phone').val(),
        address: $('#Address').val(),
        state: $('#State').val(),
        city: $('#City').val(),
        blood: $('#Blood').val()
    });
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
});

messagesRef.once('value').then((snapshot) => {
     const data=snapshot.val();
      if(!data) return;
      console.log(data);
    Object.keys(snapshot.val()).forEach((key) => {
        console.log(`Name: ${snapshot.val()[key].name}`);
        console.log(`Email: ${snapshot.val()[key].email}`);
        console.log(`Phone: ${snapshot.val()[key].phone}`);
        console.log(`Address: ${snapshot.val()[key].address}`);
        console.log(`State: ${snapshot.val()[key].state}`);
        console.log(`City: ${snapshot.val()[key].city}`);
        console.log(`Blood: ${snapshot.val()[key].blood}`);
    });
});