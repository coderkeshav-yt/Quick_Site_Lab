// Import Firebase SDK - using require to avoid TypeScript issues
const firebase = require('firebase/app');
require('firebase/firestore');

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAumvJ2pmC8mB-VEvfoqdQwmk1Q44ChOQQ",
  authDomain: "quicksitelab-aa089.firebaseapp.com",
  projectId: "quicksitelab-aa089",
  storageBucket: "quicksitelab-aa089.appspot.com",
  messagingSenderId: "1075717901627",
  appId: "1:1075717901627:web:aa387cbc06d633ec9fbb1e",
  measurementId: "G-8CK8BJ1MSC"
};

// Initialize Firebase
let app;
let db;
let analytics = null;

// Check if Firebase app is already initialized
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

// Get Firestore instance
db = firebase.firestore();

// Export the Firestore instance
export { db, analytics };
