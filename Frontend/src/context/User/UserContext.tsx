import { createContext } from "react";
import { UserType } from "../../types/UserType";

type User = {
   userData: UserType,
   setUserData: (newState: UserType) => void
}

const initialValue = {
   // userData: {id: '', userName: '', userLogin: '', userPassword: '', userAdmin: false},
   userData: {id: '', userName: '', userLogin: '', userPassword: '', userAdmin: false},
   setUserData: () => {}
}

export const UserContext = createContext<User>(initialValue)