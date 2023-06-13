import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import app from './firebase/firebase.config';
import app from '../firebase/firebase.config';


export const AuthContex = createContext();
const auth = getAuth(app);
const googleProviderSignUp = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [ reviews, setReview] = useState();
    const [loading, setLoading] = useState(true);
    
   
   
        
    const createUser = (email, password) =>{
       
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const LogIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignUp = () =>{
        return signInWithPopup(auth, googleProviderSignUp);
    }
    // useEffect(()=>{
    //     fetch('https://personal-server-foodservice.vercel.app/reviews', {
    //         method: 'POST',
    //         headers: {
    //             'content-type' : 'application/json',
    //         },
    //         body: JSON.stringify(reviews),
    //     })
    //     .then(res=> res.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.error(err))
    //    },[])

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            console.log('current user',currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const logOut = () =>{
        return signOut(auth);
    }

    const authInfo = {user, reviews, createUser, googleSignUp, LogIn, logOut, loading}
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;