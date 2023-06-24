// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
//   measurementId: "",
// };

const firebaseConfig = {
  apiKey: "AIzaSyD-qsX8vVMK2RzhV699KKqIyvk3KYsyWRg",
  authDomain: "nhat-91cdf.firebaseapp.com",
  projectId: "nhat-91cdf",
  storageBucket: "nhat-91cdf.appspot.com",
  messagingSenderId: "574583540450",
  appId: "1:574583540450:web:872bec0eef31b94758ecbb",
  measurementId: "G-M9YE7338Q2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
