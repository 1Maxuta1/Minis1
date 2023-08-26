import {auth} from "../lib/firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { React} from "react";
import {createContext} from "react";

const UserContext = createContext()


export const AuthContextProvider = ({children}) => {

const createUser = (email, password) => {
 return createUserWithEmailAndPassword(auth, email, password)
  }

 
  return (
    <UserContext.Provider value={{createUser}}>
    {children}
    </UserContext.Provider>
  )

};
export const UserAuth = () => {
  return UserContext(UserContext); 
}