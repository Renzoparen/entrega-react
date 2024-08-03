import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxHfbE5cbJcToZyxLddZqkF2BfDwsAdpE",
  authDomain: "proyecto-react-parentelli.firebaseapp.com",
  projectId: "proyecto-react-parentelli",
  storageBucket: "proyecto-react-parentelli.appspot.com",
  messagingSenderId: "368285224542",
  appId: "1:368285224542:web:aefeb8d242a74c588faecf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
