import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from 'axios'

import Square from "../../assets/Icons/Square"
import SquareX from "../../assets/Icons/SquareXMark"
import UserPen from "../../assets/Icons/UserPen"
import UserPlus from "../../assets/Icons/UserPlus"
import ArrowLeftLong from "../../assets/Icons/ArrowLeftLong"
import { useEffect } from "react"

export default function EditUser(props) {
   const backend = 'http://localhost:3001'

   const { id } = useParams()
   console.log('ID do Usuário: ' + id)

   const navigate = useNavigate()

   let [admin, setAdmin] = useState(false)

   let newUserName = document.querySelector('#newUserName')
   let newUserLogin = document.querySelector('#newUserLogin')
   let newUserPassword = document.querySelector('#newUserPassword')
   let newUserAdmin = document.querySelector('#isAdmin')

   useEffect(() => {
      getUser()
   })
   
   async function getUser() {
      await axios.get(`${backend}/user/${id}`)
         .then(response => {
            let userName = response.data[0].userName
            let userLogin = response.data[0].userLogin
            let userPassword = response.data[0].userPassword
            let userAdmin = response.data[0].userAdmin

            newUserName.value = userName
            newUserLogin.value = userLogin
            newUserPassword.value = userPassword
            newUserAdmin = admin

            console.log('Valor do admin é: ' + newUserAdmin)
            console.log('bc ' + userAdmin)
         })
   }

   //getUser()

   const updateUser = async(id) => {

      if ((newUserName.value !== '') && (newUserLogin.value !== '') && (newUserPassword.value !== '')) {
         // alert(
         //    `
         //       Nome Completo: ${newUserName.value}
         //       Login: ${newUserLogin.value}
         //       Senha: ${newUserPassword.value}
         //       Admin: ${newUserAdmin ? 'Sim' : 'Não'}
         //    `
         // )
         console.log(`${backend}/edit/user/${id}`)

         await axios.put(`${backend}/edit/user/${id}`, {
            newUserName: newUserName.value,
            newUserLogin: newUserLogin.value,
            newUserPassword: newUserPassword.value,
            newUserAdmin: admin
         })
            .then(response => {
               alert(response.data.msg)
            })
            //.then(setTimeout(() => { navigate('/') }, 5000))
            //.then( alert('Usuario cadastrado no sistema com sucesso') )
            .catch(err => console.log(err))
      } else {
         alert('Preencha os campos')
      }
   }


   return (
      <>
         <main className="container flex">
            <div className="forms">

               <section className="registerNewUser w-100 h-100  f column sbt">
                  <h4 className="flex">
                     Registro de Usuário
                     <UserPlus w='24' h='24' fill='#0DCAF0' className='ml-1' />
                  </h4>

                  <div className="inputForm">
                     <input type="text" name="newUserName" id="newUserName"
                        placeholder="Nome Completo"
                        required
                        onInvalid={e => e.target.setCustomValidity('Digite o nome do novo colaborador')}
                        onInput={e => e.target.setCustomValidity('')} />
                  </div>

                  <div className="inputForm">
                     <input type="text" name="newUserLogin" id="newUserLogin" required placeholder="Login"
                        onInvalid={e => e.target.setCustomValidity('Digite o login do novo colaborador')}
                        onInput={e => e.target.setCustomValidity('')} />
                  </div>

                  <div className="inputForm">
                     <input type="password" name="newUserPassword" id="newUserPassword" required placeholder="Senha"
                        onInvalid={e => e.target.setCustomValidity('Digite uma senha para o novo colaborador')}
                        onInput={e => e.target.setCustomValidity('')} />
                  </div>

                  <div className="isAdminDiv flex" >
                     <span className="flex" id="isAdmin" onClick={() => setAdmin(!admin)}>
                        {
                           admin ?
                              <SquareX w='24' h='24' fill='#0DCAF0' className='mr-2' /> /* TRUE */ :
                              <Square w='24' h='24' fill='#0DCAF0' className='mr-2' /> /* FALSE */
                        }
                     </span>
                     <p>Usuário Administrador</p>
                  </div>

                  <button
                     id="submitNewUser"
                     className="submitNewUser btn btn-info"
                     onClick={ () => updateUser(id) } >
                     Atualizar dados
                     <UserPen w='24' h='24' fill='var(--bs-dark)' className='ml-2' />
                  </button>

                  <Link to='/' className="btn btn-warning" >
                     Voltar
                     <ArrowLeftLong w='24' h='24' fill='var(--bs-dark)' className='ml-1' />
                  </Link>
               </section>
            </div>
         </main>
      </>
   )
}