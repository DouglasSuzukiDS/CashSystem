import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import ArrowRightToBracket from "../../assets/Icons/ArrowRightToBracket";
import IdCard from "../../assets/Icons/IdCard";

export default function EditLogin() {
   const db = "http://localhost:3001";

   let userLogin = document.querySelector("#userLogin");
   let userPassword = document.querySelector("#userPassword");

   if (userLogin.value && userPassword.value !== "") {
      const login = userLogin.value;
      const password = userPassword.value;

      alert(`User: ${userLogin.value}, ${userPassword.value}`);

      if (response.status !== 200) {
         alert(`Colaborador não encontrado`);
      } else {
         alert(`Dados do colaborador atualizado com sucesso`);
      }
   } else {
      alert(
         "Por obséquio preencha os dados exigidos, sujeito a pancada. 🤜😵🤛"
      );
   }


   return (
      <main className="container flex">
         <div className="forms">

            <section className="loginUser w-100 h-100  f column sbt">
               <h4 className="flex">
                  Identifique-se
                  <IdCard w='25' h='25' fill='var(--bs-info)' className='ml-1' />
               </h4>

               <div className="inputForm">
                  <input type="text" name="userLogin" id="userLogin"
                     placeholder="Login / Matrícula"
                     required
                     onInvalid={e => e.target.setCustomValidity('Digite seu Login/Matrícula')}
                     onInput={e => e.target.setCustomValidity('')} />
               </div>

               <div className="inputForm">
                  <input type="password" name="userPassword" id="userPassword"
                     required
                     placeholder="Senha"
                     onInvalid={e => e.target.setCustomValidity('Digite a sua senha')}
                     onInput={e => e.target.setCustomValidity('')} />
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
                  onClick={loginUser} >
                  Logar no Sistema
                  <ArrowRightToBracket w='23' h='23' fill='var(--text-color)' className='ml-1' />
               </button>
            </section>
         </div>
      </main>
   )
}