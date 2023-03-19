/*import { createContext, ReactNode, useState } from "react";

type UserContextProps = {
   children: ReactNode
}

type UserContextType = {
   isOpenModal: boolean,
   setIsOpenModal: (newState: boolean) => void,
   // users: User[],
   // setUser: (newState: User[]) => void
}

const initialValue = {
   isOpenModal: false,
   setIsOpenModal: () => {},
   // users: [], 
   // setUsers: () => {}
}

export const UserContext = createContext<UserContextType>(initialValue)

export const UserContextProvider = ({ children }: UserContextProps) => {
   const [isOpenModal, setIsOpenModal] = useState(initialValue.isOpenModal)
   // const [users, setUsers] = useState<Users[]>([])

   return (
      <UserContext.Provider value={ { isOpenModal, setIsOpenModal } }>
         { children }
      </UserContext.Provider>
   )
}*/

// https://www.youtube.com/watch?v=fPR-Z56BDyg