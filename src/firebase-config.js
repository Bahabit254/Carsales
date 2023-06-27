import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
require('dotenv').config()

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_APIKEY}`,
    authDomain: `${process.env.REACT_APP_AUTH1}`,
    projectId: `${process.env.REACT_APP_PROJ_ID}`,
    storageBucket: `${process.env.REACT_APP_STR_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_MSG_ID}`,
    appId: `${process.env.REACT_APP_APP_ID}`,
    measurementId: `${process.env.REACT_APP_MEASURE_ID}`
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);