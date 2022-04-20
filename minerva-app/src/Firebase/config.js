import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "minerva-e-commerce.firebaseapp.com",
  projectId: "minerva-e-commerce",
  storageBucket: "minerva-e-commerce.appspot.com",
  messagingSenderId: "717400659348",
  appId: "1:717400659348:web:64a5c324cc35ce08c2eb81",
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = ()=> {
    return app
}