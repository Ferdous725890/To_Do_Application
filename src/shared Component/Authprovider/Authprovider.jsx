import React, { createContext, useContext, useEffect, useState } from "react";
import auth from "../../Firebase/FirebaseConfigFile/Firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const Authcontext = createContext(null);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [looding, setLooding] = useState(true);
  //--------------------------------------------------------Login User-------------------------
const userLogin = (email, password) =>{
  return signInWithEmailAndPassword(auth, email, password)
}
  //--------------------------------------------------------Register User-------------------------
  const userCreated = (email, password) => {
    console.log(email, password, "email and password ");
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //-------------------------------------------------------- User Google Lgoin -------------------------

  const provider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  //-------------------------------------------------------- User Log Out-------------------------

  const userLogOut = () =>{
    return signOut(auth)
  }

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
    userLogin, 
    userLogOut
  };

  return (
    <Authcontext.Provider value={userInfo}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;
