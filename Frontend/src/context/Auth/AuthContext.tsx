import { createContext } from "react";
import { UserType } from "../../types/UserType";

export type AuthContextType = {
   user: UserType | null
   loginSystem: (userLogin: string, userPassword: string) => Promise<boolean>
   logout: () => void
}

export const AuthContext = createContext<AuthContextType>(null!)