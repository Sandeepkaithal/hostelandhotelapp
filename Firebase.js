import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey:  process.env.REACT_APP_APPKEY,
  authDomain: "hostelandhotel-ee75c.firebaseapp.com",
  databaseURL: "https://hostelandhotel-ee75c-default-rtdb.firebaseio.com",
  projectId: "hostelandhotel-ee75c",
  storageBucket: "hostelandhotel-ee75c.appspot.com",
  messagingSenderId: "568714042161",
  appId: "1:568714042161:web:f87d7e153ed8a67bf1ae10",
  // measurementId: "G-RQD56G8326"
};
 
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;