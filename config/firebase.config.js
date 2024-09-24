import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBCWp34BivABZo3LnpUyniwbJc1Ko2bQSU",
    authDomain: "urjasvita-awasthi-portfolio.firebaseapp.com",
    projectId: "urjasvita-awasthi-portfolio",
    storageBucket: "urjasvita-awasthi-portfolio.appspot.com",
    messagingSenderId: "796384426401",
    appId: "1:796384426401:web:b67e1f23fb00fc4b08b3e0",
    measurementId: "G-EEVEGFMPQM"
  };
  
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
