import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyBpDUMXd_j4JQI78PT9wL72NKWVhK_8iY0",
    authDomain: "loginreactapp-85928.firebaseapp.com",
    databaseURL: "https://loginreactapp-85928.firebaseio.com",
    projectId: "loginreactapp-85928",
    storageBucket: "loginreactapp-85928.appspot.com",
    messagingSenderId: "1003735362692",
    appId: "1:1003735362692:web:889d49645d6d2cf1f026d1"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire