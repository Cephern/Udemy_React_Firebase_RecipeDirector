import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAatC2ePx-eA6RnBoJ8UelRwjjJBqT8dRg",
  authDomain: "cooking-ninja-site-6347f.firebaseapp.com",
  projectId: "cooking-ninja-site-6347f",
  storageBucket: "cooking-ninja-site-6347f.appspot.com",
  messagingSenderId: "679140314822",
  appId: "1:679140314822:web:01a46656eada1362f251c7",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
