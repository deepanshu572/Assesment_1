import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr_eqHMFw0n2jBy7rNQEP2tqJ3GnR-IPY",
  authDomain: "authsystem-1d8b3.firebaseapp.com",
  projectId: "authsystem-1d8b3",
  storageBucket: "authsystem-1d8b3.firebasestorage.app",
  messagingSenderId: "766536930424",
  appId: "1:766536930424:web:26b41d9434241fe639898d",
  measurementId: "G-K8ZSS5808S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };