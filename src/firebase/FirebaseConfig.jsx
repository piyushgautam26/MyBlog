import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD4g8s8joDv6k5lA0RnlZ-H81t-EjQbBiI",
    authDomain: "myblogs-31f5a.firebaseapp.com",
    projectId: "myblogs-31f5a",
    storageBucket: "myblogs-31f5a.appspot.com",
    messagingSenderId: "114528863130",
    appId: "1:114528863130:web:d4e47dc7d1086677ca7023"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDb, auth, storage };