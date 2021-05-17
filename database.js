
const firebaseConfig = {
  apiKey: "AIzaSyDP2NK16Prp1vIGZHIYH2mnzVIa9kfxVcM",
  authDomain: "covid-19-indian-records.firebaseapp.com",
  databaseURL: "https://covid-19-indian-records.firebaseio.com",
  projectId: "covid-19-indian-records",
  storageBucket: "covid-19-indian-records.appspot.com",
  messagingSenderId: "393615672211",
  appId: "1:393615672211:web:b0ba02362bfc2b90001e66",
  measurementId: "G-DK225QWNDX"
};
try {
    firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log("Error");
}  
var messagesRef = firebase.database().ref('contactformmessages');

$('#contactForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('#FullName').val(),
        email: $('#Email').val(),
        phone: $('#Phone').val(),
        site: $('#Site').val(),
        state: $('#State').val(),
        city: $('#City').val()
    });
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
});

messagesRef.once('value').then((snapshot) => {
     const data=snapshot.val();
      if(!data) return;
    Object.keys(snapshot.val()).forEach((key) => {
        console.log(`Name: ${snapshot.val()[key].name}`);
        console.log(`Email: ${snapshot.val()[key].email}`);
        console.log(`Phone: ${snapshot.val()[key].phone}`);
        console.log(`Site: ${snapshot.val()[key].site}`);
        console.log(`State: ${snapshot.val()[key].state}`);
        console.log(`City: ${snapshot.val()[key].city}`);
    });
});