// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiA6YCq1aFdXF26D342E2ELpflQpAU2_Y",
  authDomain: "define-your-life.firebaseapp.com",
  projectId: "define-your-life",
  storageBucket: "define-your-life.appspot.com",
  messagingSenderId: "606922372857",
  appId: "1:606922372857:web:f3a3fc017e5afdb5545428",
  measurementId: "G-GW9J5K8B9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)