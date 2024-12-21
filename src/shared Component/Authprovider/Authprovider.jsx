import React, { createContext, useContext, useEffect, useState } from "react";
import auth from "../../Firebase/FirebaseConfigFile/Firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
export const Authcontext = createContext(null);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [looding, setLooding] = useState(true);
  const userCreated = (email, password) => {
    console.log(email, password, "email and password ");
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const provider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

useEffect(()=>{
    const  unsubscribe = onAuthStateChanged(auth,( currentUser)=>{
        setUser(currentUser)
        setLooding(false)
    } )
    return ()=>unsubscribe()
})

  const userInfo = {
    user,
    googleLogin,
    userCreated,
  };

  return (
    <Authcontext.Provider value={userInfo}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;
