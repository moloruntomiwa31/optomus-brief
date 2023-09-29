import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDEjVOqdc2VkxZVwEHuR6barfgWvtPrqQg",
  authDomain: "optomus-brief-69044.firebaseapp.com",
  projectId: "optomus-brief-69044",
  storageBucket: "optomus-brief-69044.appspot.com",
  messagingSenderId: "1052781292049",
  appId: "1:1052781292049:web:ebea5076f8033268df5fb0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage(app);
const storageRef = ref(storage)
const db = getFirestore(app)


export { auth, app, storage, db };
