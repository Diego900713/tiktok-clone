// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA71DetidZW1fXPSGFOd2wZXj8VL2VAfho",
  authDomain: "tiktok-516a3.firebaseapp.com",
  projectId: "tiktok-516a3",
  storageBucket: "tiktok-516a3.firebasestorage.app",
  messagingSenderId: "129079515290",
  appId: "1:129079515290:web:1823dbc1443cdd9b796723"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);