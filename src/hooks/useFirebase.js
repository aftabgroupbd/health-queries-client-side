
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLodaing] = useState(true);
    const auth = getAuth();

    const signinUsingGoogle = () => {
        setIsLodaing(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLodaing(false);
        });
        return () => unsubscribed;
    }, []);
    const logOut = () => {
        setIsLodaing(true);
        signOut(auth).then(() => {
            setUser({});
        })
            .finally(() => setIsLodaing(false));
    }
    return {
        user,
        isLoading,
        signinUsingGoogle,
        logOut
    }
}

export default useFirebase;