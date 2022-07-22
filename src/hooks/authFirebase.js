import React, { useState, useMemo } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const useAuthFirebase = () => {
    const [currentUser, setCurrentUser] = useState({})
    const user = useMemo( () => {
        onAuthStateChanged( auth, (user) => {
          if(user){
            setCurrentUser(user)
          }else{
            setCurrentUser({})
          }
        })
    },[])


    return {
        currentUser
    }
}

export {
    useAuthFirebase
}