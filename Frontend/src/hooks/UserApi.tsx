import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../context/User/UserContext";
import { UserType } from "../types/UserType";


const backend: string = "http://localhost:3001"
// const navigate = useNavigate()

//const [userData, setUserData] = useState<UserType>()

export const useApi = () => ({
   
   validateToken: async(token: string) => {
      const response = await axios.post('/validate', { token })
      
      return response.data
   },

   loginSystem: async(userLogin: string, userPassword: string) => {
      let response = await axios.post(`${backend}/login`, {userLogin , userPassword })
         .then((response) => {
            if (response.status === 200) {
               console.log(response.data.msg, response.data.token, JSON.parse(response.data.user))

               //setTimeout(() => navigate('/'), 2000)

               //setTimeout(() => navigate('/OpenSystem'), 1000)
               //console.log('Response no UserAPI', response)
               console.log('Nome no UserAPI', JSON.parse(response.data.user))
               // setUserData(response.data.user)
               return response
            }
         })
         .catch(err => {
            // alert('userAPI ' + err.response.data.msg)
            return err.response.data.msg
         })

      return response.data
   },

   logout: async() => {
      const response = await axios.post('/logout')
      
      return response.data
   }
})