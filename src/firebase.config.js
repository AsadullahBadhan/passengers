import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBH6Bra70x5buoq0GsX98XULEZJQfIuc1Q",
  authDomain: "passengers-bd4cd.firebaseapp.com",
  projectId: "passengers-bd4cd",
  storageBucket: "passengers-bd4cd.appspot.com",
  messagingSenderId: "522698157315",
  appId: "1:522698157315:web:754c814a1defa93fc14d36"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;