import firebaseConfig from "./Firebase";
import { initializeApp } from "firebase/app";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;
