import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Utils/firebase.config';
import { Toaster } from 'react-hot-toast';



const auth = getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [path, setPath] = useState('/')
    const [loading, setLoading] = useState(true)
    const gogoleProvider = new GoogleAuthProvider()


    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const loginUser = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const logOutUser = () => {
        localStorage.removeItem('access-token')
        setLoading(true)
        return signOut(auth)
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, gogoleProvider)
    }


    useEffect(() => {
        const unsub = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser && currentUser?.email) {
                const userInfo = {
                    name: currentUser.name,
                    email: currentUser?.email,
                    uid: currentUser.uid

                }
                fetch('http://localhost:3000/jwt', {
                    method: 'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                .then(res => res.json())
                .then(tt => {
                    console.log(tt);
                    localStorage.setItem('access-token', tt.token)
                })
            }
            setLoading(false)
        })
        return () => unsub()
    }, [])

    const info = {
        user,
        loading,
        createUser,
        loginUser,
        loginWithGoogle,
        logOutUser,
        path,
        setPath,

    }




    return (
        <AuthContext.Provider value={info}>
            {children}
            <Toaster />
        </AuthContext.Provider>
    );
};

export default AuthProvider;