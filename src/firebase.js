// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
import {getDatabase, ref as dbRef} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArQDoU4KrQ28MH-tcgLZtcp0kefW6u3M0",
    authDomain: "eventlocation-a8625.firebaseapp.com",
    projectId: "eventlocation-a8625",
    storageBucket: "eventlocation-a8625.appspot.com",
    messagingSenderId: "800181284074",
    appId: "1:800181284074:web:ef25dfb406ead5345a7b93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
const auth=getAuth(app);
const dataRef = dbRef(database, 'events');
export  {
    dataRef,
    auth
}