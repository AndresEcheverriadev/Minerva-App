import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCwlLg5zW1UscGGj6imuKh4AiXxbPmB0hk",
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

