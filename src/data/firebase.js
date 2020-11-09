import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCGwVvOMZhD5XxMcXJmx1uU9Vu3ZpJtBD8",
    authDomain: "doggopedia-3c39d.firebaseapp.com",
    databaseURL: "https://doggopedia-3c39d.firebaseio.com",
    projectId: "doggopedia-3c39d",
    storageBucket: "doggopedia-3c39d.appspot.com",
    messagingSenderId: "1268968165",
    appId: "1:1268968165:web:06891aacd699865fd9820c",
    measurementId: "G-9C6NSVP192"
  };

firebase.initializeApp(firebaseConfig);

const breedSnapshotPromise = db.collection("Dogs Breeds").get();
breedSnapshotPromise.then(snapshot =>{
    const docs = snapshot.docs;
    for (const doc of docs){}
    snapshot.forEach((doc) => {
    console.log(doc.id);
    console.log(doc.data());    
    });
    
})


console.log(breedSnapshotPromise);

const db = firebase.firestore();