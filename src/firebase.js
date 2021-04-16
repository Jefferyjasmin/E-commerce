/* eslint-disable no-unused-vars */
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCeCmg6FLmhCYGOd5X1QumIxGrKp6_k21Y",
  authDomain: "ecommerce-c7cd1.firebaseapp.com",
  projectId: "ecommerce-c7cd1",
  storageBucket: "ecommerce-c7cd1.appspot.com",
  messagingSenderId: "383645297540",
  appId: "1:383645297540:web:4d3d3bf05023e2f2168bd1",
  measurementId: "G-7RNSJMGW5Q",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
