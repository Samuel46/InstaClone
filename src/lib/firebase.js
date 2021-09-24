import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import { seedDatabase} from '../seed'
 
const config = {
  apiKey: "AIzaSyB3KbpDOsOf7IyHqcra1hYeexsGFWro9l4",
  authDomain: "instaclone-78980.firebaseapp.com",
  projectId: "instaclone-78980",
  storageBucket: "instaclone-78980.appspot.com",
  messagingSenderId: "101661256434",
  appId: "1:101661256434:web:9a6f40f22e6ae51f2a3e6b",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
// seedDatabase(firebase)

export { firebase, FieldValue };
