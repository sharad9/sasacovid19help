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

$('#resourcesForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('.nameField').val(),
        email: $('.emailField').val(),
        subject: $('.phoneField').val(),
        message: $('.siteField').val()
    });
 
    $('.success-message').show();
    console.log("successfully done.")
 
    $('#resourcesForm')[0].reset();
});

messagesRef.once('value').then((snapshot) => {
     const data=snapshot.val();
      if(!data) return;
    Object.keys(snapshot.val()).forEach((key) => {
        console.log(`Name: ${snapshot.val()[key].name}`);
        console.log(`Email: ${snapshot.val()[key].email}`);
        console.log(`Subject: ${snapshot.val()[key].subject}`);
        console.log(`Message: ${snapshot.val()[key].message}`);
    });
});
