import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPA4Hf0aBdGyHzAdd-HbbtCY8p37lkfg0",
    authDomain: "isp-website-for-writer.firebaseapp.com",
    projectId: "isp-website-for-writer",
    storageBucket: "isp-website-for-writer.appspot.com",
    messagingSenderId: "651669930062",
    appId: "1:651669930062:web:2f2ecb15b549353a58431f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;