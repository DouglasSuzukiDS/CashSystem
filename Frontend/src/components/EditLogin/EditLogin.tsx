import axios from 'axios'
import { Link } from 'react-router-dom'
import { ArrowRightToBracket  } from "../../assets/Icons/ArrowRightToBracket";
import { IdCard } from "../../assets/Icons/IdCard";
import { useState } from 'react';

export const Login = () => {
   const [userLogin, setUserLogin] = useState('')
   const [userPassword, setUserPassword] = useState('')

   const loginUser = async() => {
      const server = "http://localhost:3001"

      if (userLogin && userPassword !== "") {
         const login = userLogin;
         const password = userPassword;

         const response = await axios.post(`${server}/login`, {
            userLogin: login,
            userPassword: password,
         });

         alert(`User: ${userLogin}, ${userPassword}`);

         if (response.status !== 200) {
            alert(`Colaborador não encontrado`);
         } else {
            alert(`Login no Front`);
         }
      } else {
         alert(
            "Colaborador, por obséquio logue com vossa matricula e senha. Caso contrário, sujeito a pancada. 🤜😵🤛"
         );
      }
   }

   return (
      <main className="container flex">
         <div className="forms">

            <section className="loginUser w-100 h-100  f column sbt z-index-50">
               <h4 className="flex">
                  Identifique-se
                  <IdCard w='25' h='25' fill='var(--bs-info)' className='ml-1' />
               </h4>

               <div className="inputForm">
                  <input type="text" name="userLogin" id="userLogin"
                     placeholder="Login / Matrícula"
                     value={ userLogin }
                     onChange={ e => setUserLogin(e.target.value) }
                     required
                     onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Digite seu Login/Matrícula')}
                     onInput={e => (e.target as HTMLInputElement).setCustomValidity('')} />
               </div>

               <div className="inputForm">
                  <input type="password" name="userPassword" id="userPassword"
                     placeholder="Senha"
                     value={ userPassword }
                     onChange={ e => setUserPassword(e.target.value) }
                     required
                     onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Digite a sua senha')}
                     onInput={e => (e.target as HTMLInputElement).setCustomValidity('')} />
               </div>

               <div className="actionsLogin f sbt " >
                  <Link to='/' className="ForgotPassword secondary-hover flex">
                     Esqueci minha senha
                  </Link>

                  <Link to='/registerNewUser' className="RegisterUserNow info-hover flex ">
                     Registrar Colaborador
                  </Link>
               </div>

               <button
                  id="LogonUser"
                  className="LogonUser btn btn-info"
                  onClick={ loginUser } >
                  Logar no Sistema
                  <ArrowRightToBracket w='23' h='23' fill='var(--text-color)' className='ml-1' />
               </button>
            </section>
         </div>
      </main>
   )
}