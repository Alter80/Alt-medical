import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../components/Firebase/firebase.init";

initializeAuthentication();


const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const goolelogin = () => {
        signInWithPopup(auth, provider)
            .then(result => { setUser(result.user) })
            .catch((error) => { setError(error.message) })
    }

    console.log('user', user);

    return { goolelogin, user, error }
}

export default useFirebase;