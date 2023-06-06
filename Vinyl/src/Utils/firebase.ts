import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import  "../indexfireb";
import { Product } from "../Types/products";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import {  getDocs } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

//Register

const registerUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<boolean> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
    return true;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    return false;
  }
};

//Logeo

const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<boolean> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
    alert("welcome " + userCredential.user.email);
    return true;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    return false;
  }
};

const saveProductInDB = async( products: Product) => {
try {
  const resp = await addDoc(collection(db, "products"), products);
} catch (e) {
  console.error("Error adding document: ", e);
}
};

const getProductsFromDB = async (): Promise<Product[]> =>{
const resp: Product [] = [];
const querySnapshot = await getDocs(collection(db, "products"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
  resp.push({
    ...doc.data(),
  } as Product);
});
  return resp 
};

 
export default {saveProductInDB, getProductsFromDB, registerUser, loginUser}