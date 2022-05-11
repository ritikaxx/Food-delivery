import {getApp,getApps,initializeApp} from "firebase/app";
import {getFirestore, GetFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
apiKey: "AIzaSyAjETHwFUUM_dLoNEVVqzq9_u2pfn4hBNo",
  authDomain: "food-delivery-d8519.firebaseapp.com",
  databaseURL: "https://food-delivery-d8519-default-rtdb.firebaseio.com",
  projectId: "food-delivery-d8519",
  storageBucket: "food-delivery-d8519.appspot.com",
  messagingSenderId: "738820476093",
  appId: "1:738820476093:web:f75d69bc7e4b18aeaf3bd4"
};

const app = getApps.Length >0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app,firestore,storage};