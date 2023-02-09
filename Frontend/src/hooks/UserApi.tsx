import axios from "axios";


const backend: string = "http://localhost:3001"
// const navigate = useNavigate()

export const useApi = () => ({
   validateToken: async(token: string) => {
      const response = await axios.post('/validate', { token })
      
      return response.data
   },

   loginSystem: async(userLogin: string, userPassword: string) => {
      let response = await axios.post(`${backend}/login`, {userLogin , userPassword })
         .then((response) => {
            if (response.status === 200) {
               console.log(response.data.msg, response.data.token, response.data.user)

               //setTimeout(() => navigate('/'), 2000)

               //setTimeout(() => navigate('/OpenSystem'), 1000)
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