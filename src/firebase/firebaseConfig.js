// Using Firebase compat version for better compatibility
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

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

// Check if Firebase is already initialized
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

// Get Firestore instance
const db = firebase.firestore();

// Enable timestamps in snapshots
db.settings({ timestampsInSnapshots: true });

// Log Firebase initialization
console.log('Firebase initialized with project ID:', firebaseConfig.projectId);

// Export Firebase and Firestore instances
export { firebase, db };
