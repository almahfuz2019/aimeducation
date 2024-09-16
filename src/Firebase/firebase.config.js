import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDmja6-jG34bTAQWmLYl3FDUihzPJOVHjc",
  authDomain: "flood-buddy.firebaseapp.com",
  projectId: "flood-buddy",
  storageBucket: "flood-buddy.appspot.com",
  messagingSenderId: "935615325038",
  appId: "1:935615325038:web:758421f542709b680c177f",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
