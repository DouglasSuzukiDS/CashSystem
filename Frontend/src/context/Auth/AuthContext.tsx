import { createContext, Dispatch, SetStateAction } from "react";
import { UserType } from "../../types/UserType";

export type AuthContextType = {
   user: UserType | null
   loginSystem: (userLogin: string, userPassword: string) => Promise<boolean>
   logout: () => void
   userData: UserType
   setUserData: Dispatch<SetStateAction<UserType>>
}


export const AuthContext = createContext<AuthContextType>(null!)