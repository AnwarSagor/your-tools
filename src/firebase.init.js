// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATbcHV24Z6xqIw-3iIrG1d6vUdXiaB5SQ",
    authDomain: "your-tools-client.firebaseapp.com",
    projectId: "your-tools-client",
    storageBucket: "your-tools-client.appspot.com",
    messagingSenderId: "80585269854",
    appId: "1:80585269854:web:d53ff91dd8eb5cc742cacf"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth; 