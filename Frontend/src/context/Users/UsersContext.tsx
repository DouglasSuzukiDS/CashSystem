import { createContext } from "react";
import { UserType } from "../../types/UserType";

export type UsersList = {
   users: UserType[],
   setUsers: (newState: UserType[]) => void
}

const initialValues = {
   users: [],
   setUsers: () => {}
}

export const UsersContext = createContext<UsersList>(initialValues)