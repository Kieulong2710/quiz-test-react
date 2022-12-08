
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdegwLHXTq-f8zlFZN1vsn87xEAwy23YA",
  authDomain: "test-4c9cb.firebaseapp.com",
  projectId: "test-4c9cb",
  storageBucket: "test-4c9cb.appspot.com",
  messagingSenderId: "732314293124",
  appId: "1:732314293124:web:9301d9de7e79da7b8e43d1",
  measurementId: "G-8GVF2V8485"
};
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  export default firebase;