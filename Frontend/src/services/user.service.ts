import axios from 'axios'
import { UserType } from '../types/UserType'

const server: string = 'http://localhost:3001'

export const allUsers = async (): Promise<UserType[]> => {
   return await axios.get(`${server}/users`)
      .then(({ data }) => data.result)
      .catch(e => console.log(e))
}

export const findUserById = async (id: string): Promise<UserType> => {
   const userById = (user: UserType) => user.id === id

   const userOrNone = (await allUsers()).find(userById)

   if (!userOrNone) {
      return Promise.reject('User Not Found')
   }

   return userOrNone
}