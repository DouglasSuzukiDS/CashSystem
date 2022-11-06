import { useState } from "react"
import Square from "../../assets/Icons/Square"
import SquareX from "../../assets/Icons/SquareXMark"
import UserPen from "../../assets/Icons/UserPen"
import UserPlus from "../../assets/Icons/UserPlus"

export default function Form(props) {

   let [admin, setAdmin] = useState(false)

   function newUserData() {
      let newUserFullName = document.querySelector('#newUserName').value
      let newUserLogin = document.querySelector('#newUserLogin').value
      let newUserPassword = document.querySelector('#newUserPassword').value
      let newUserAdmin = admin

      if(newUserFullName && newUserLogin && newUserPassword !== '') {
         alert(
            `
            Nome Completo: ${newUserFullName}
            Login: ${newUserLogin}
            Senha: ${newUserPassword}
            Admin: ${newUserAdmin ? 'Sim' : 'Não'}
            `
         )
      } else {
         alert('Preencha os campos')
      }

   }

   return (
      <>
         <main className="container flex">
            <div className="forms">

               <form action="/" className="registerNewUser w-100 h-100  f column sbt">
                  <h4 className="flex">
                     Registro de Usuário
                     <UserPlus w='24' h='24' fill='#0DCAF0' className='ml-1' />
                  </h4>

                  <div className="inputForm">
                     <input type="text" name="newUserName" id="newUserName" required placeholder="Nome Completo" />
                  </div>

                  <div className="inputForm">
                     <input type="text" name="newUserLogin" id="newUserLogin" required placeholder="Login" />
                  </div>

                  <div className="inputForm">
                     <input type="password" name="newUserPassword" id="newUserPassword" required placeholder="Senha" />
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

                  <button type="submit"
                     id="submitNewUser"
                     className="submitNewUser btn btn-info"
                     onClick={newUserData}
                  >
                     Registrar Funcionário
                     <UserPen w='24' h='24' fill='var(--bs-dark)' className='ml-2' />
                  </button>
               </form>
            </div>
         </main>
      </>
   )
}