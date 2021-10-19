import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../components/Firebase/firebase.init";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);


    // sign in google
    const goolelogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch((error) => { setError(error.message) })
    }

    // observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('inside state changed', user);
                setUser(user);
            }
        })
    }, []);

    // sign out
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }

    // toggle Login
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    // username
    const handleNameChange = e => {
        setName(e.target.value);
    }

    // email input
    const handleEmailchange = e => {
        setEmail(e.target.value);
    }


    // password input
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    //button submit 
    const handleReigstration = (e) => {
        e.preventDefault();
        console.log('user registered', email, password);

        // password lenth error
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must Contain 2 UpperCase.');
            return;
        }


        // login process
        const processLogin = (email, password) => {
            signInWithEmailAndPassword(auth, email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    setError('');
                })
        }

        // create new user. with email and pass
        const createNewUser = (email, password) => {
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    setError('');
                    verifyEmail();
                    setUserName();
                })
                .catch((error) => {
                    setError(error.message);
                });
        }

        isLogin ? processLogin(email, password) : createNewUser(email, password);

    }



    // email verification
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    // password Reset email send
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                console.log(result);
            })
    }

    // set UserName 
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {
                console.log(result);
            })
    }


    console.log('user', user);

    return { goolelogin, user, error, logOut, handleReigstration, handleEmailchange, handlePasswordChange, handleNameChange, handleResetPassword, toggleLogin, isLogin }
}

export default useFirebase;