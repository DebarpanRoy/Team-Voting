import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB6Kb7Y6h-qS61rWpqi2kgiMU0cyT0M3_8",
    authDomain: "voting-262e2.firebaseapp.com",
    databaseURL: "https://voting-262e2-default-rtdb.firebaseio.com",
    projectId: "voting-262e2",
    storageBucket: "voting-262e2.appspot.com",
    messagingSenderId: "881421422659",
    appId: "1:881421422659:web:2f5aaf3cf8edf9303744f6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
