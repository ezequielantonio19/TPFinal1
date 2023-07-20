import { getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4vY9Oq01SA02Yh0QheDFyYASk-o8P2T8",
  authDomain: "ezeq-rupl.firebaseapp.com",
  projectId: "ezeq-rupl",
  storageBucket: "ezeq-rupl.appspot.com",
  messagingSenderId: "234697642418",
  appId: "1:234697642418:web:8257e95b583d3aa94794ab"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);