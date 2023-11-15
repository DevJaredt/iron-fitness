import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDFW7JZ12WhyLLowRQW6kXH3HDoL5GvYws",
  authDomain: "logim-iron-fitness.firebaseapp.com",
  projectId: "logim-iron-fitness",
  storageBucket: "logim-iron-fitness.appspot.com",
  messagingSenderId: "751209644567",
  appId: "1:751209644567:web:6f6cd3e1692701f0091252"
};

const appFirebase = initializeApp (firebaseConfig);
export default appFirebase;