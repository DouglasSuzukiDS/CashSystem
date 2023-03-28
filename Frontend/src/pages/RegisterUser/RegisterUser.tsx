import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from 'axios'

import { Square } from "../../assets/Icons/Square"
import { SquareXMark } from "../../assets/Icons/SquareXMark"
import { UserPen } from "../../assets/Icons/UserPen"
import { UserPlus } from "../../assets/Icons/UserPlus"
import { ArrowLeftLong } from "../../assets/Icons/ArrowLeftLong"
import { ActionsType } from "../../types/ActionsType"
import { XMark } from "../../assets/Icons/XMark"
import { CircleCheck } from "../../assets/Icons/CircleCheck"

type Timer = NodeJS.Timeout


export const RegisterUser = ({ close }: ActionsType) => {
   const server: string = 'http://localhost:3001'
   
   const navigate = useNavigate()

   let [admin, setAdmin] = useState(false)

   const newUserRegister = async() => {
      let newUserFullName = document.querySelector('#newUserName') as HTMLInputElement
      let newUserLogin = document.querySelector('#newUserLogin') as HTMLInputElement
      let newUserPassword = document.querySelector('#newUserPassword') as HTMLInputElement
      let newUserAdmin = admin

      if ((newUserFullName.value !== '') && (newUserLogin.value !== '') && (newUserPassword.value !== '')) {
         // alert(
         //    `
         //       Nome Completo: ${newUserFullName}
         //       Login: ${newUserLogin}
         //       Senha: ${newUserPassword}
         //       Admin: ${newUserAdmin ? 'Sim' : 'Não'}
         //    `
         // )

         await axios.post(`${server}/registerNewUser`, {
            newUserFullName: newUserFullName.value,
            newUserLogin: newUserLogin.value,
            newUserPassword: newUserPassword.value,
            newUserAdmin: newUserAdmin
         })
            .then(response => {
               alert(response.data.msg) // Aqui recebe a resposta do Backend 
               })
            .catch(err => console.log(err))
      } else {
         alert('Preencha os campos')
      }

      newUserFullName.value = ''
      newUserLogin.value = ''
      newUserPassword.value = ''
      newUserAdmin = false

   }

   return (
      <>
         <main className="container flex z-index-50">
            <div className="forms">

               <section className="registerNewUser w-100 h-100  f column sbt">
                  <h4 className="flex sbt">
                     <div className="flex text-center w-100">
                        <h5>Registro de Usuário</h5>
                        <UserPlus w='24' h='24' fill='#0DCAF0' className='ml-1' />
                     </div>

                     <div id="closeNewUser" className="flex">
                        <XMark w='24' h='24'
                           className=''
                           onClick={close}
                        />
                     </div>
                  </h4>

                  <div className="inputForm">
                     <input type="text" name="newUserName" id="newUserName"
                        placeholder="Nome Completo"
                        required
                        onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Digite o nome do novo colaborador')}
                        onInput={e => (e.target as HTMLInputElement).setCustomValidity('')} />
                  </div>

                  <div className="inputForm">
                     <input type="text" name="newUserLogin" id="newUserLogin" required placeholder="Login"
                        onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Digite o login do novo colaborador')}
                        onInput={e => (e.target as HTMLInputElement).setCustomValidity('')} />
                  </div>

                  <div className="inputForm">
                     <input type="password" name="newUserPassword" id="newUserPassword" required placeholder="Senha"
                        onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Digite uma senha para o novo colaborador')}
                        onInput={e => (e.target as HTMLInputElement).setCustomValidity('')} />
                  </div>

                  <div className="isAdminDiv pointer flex" onClick={() => setAdmin(!admin)}>
                     <span className="flex" id="isAdmin" >
                        {
                           admin ?
                              <SquareXMark w='24' h='24' fill='#0DCAF0' className='mr-2' /> /* TRUE */ :
                              <Square w='24' h='24' fill='#0DCAF0' className='mr-2' /> /* FALSE */
                        }
                     </span>
                     <p className="text-color">Usuário Administrador</p>
                  </div>

                  <button
                     id="submitNewUser"
                     className="submitNewUser btn btn-info"
                     onClick={newUserRegister} >
                     Registrar Funcionário
                     <UserPen w='24' h='24' fill='var(--bs-dark)' className='ml-2' />
                  </button>

                  <button className="btn btn-success" onClick={ close } >
                     Ok
                     <CircleCheck w='24' h='24' fill='var(--text)' className='ml-1' />
                  </button>
               </section>
            </div>
         </main>
      </>
   )
}