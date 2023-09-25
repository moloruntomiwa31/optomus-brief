import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDzhUYc2dLvw7V-xN_Pp18qeFPgFhZsOro",
  authDomain: "optomus-brief.firebaseapp.com",
  projectId: "optomus-brief",
  storageBucket: "optomus-brief.appspot.com",
  messagingSenderId: "975106987150",
  appId: "1:975106987150:web:f2506119052ffc4a4765df",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage(app);


export { auth, app, storage };
