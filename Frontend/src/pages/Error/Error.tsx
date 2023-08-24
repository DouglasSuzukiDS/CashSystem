import { Link } from 'react-router-dom'

import { ShieldExclamation } from "../../assets/Icons/ShieldExclamation"
import { House } from '../../assets/Icons/House'

export const Error = () => {
   return(
      <>
         <main className="container errorPage flex column">
            <section className="border flex column p-2">

               <div className="flex"> {/* Warning */}
                  <div>
                     <ShieldExclamation 
                        fill='var(--bs-warning)' w='40' h='40' 
                        className='mr-2' /> 
                  </div>

                  <h1 className="text-danger flex text-center">
                     Página não encontrada.
                  </h1>

                  <div>
                     <ShieldExclamation 
                        fill='var(--bs-warning)' w='40' h='40' 
                        className='ml-2' /> 
                  </div>
               </div>

               <h3 className="flex my-2 text-center text-color">
                  Por obséquio, volte para a aplicação.
               </h3>

               <Link to='/' className="btn btn-primary">
                  Voltar
                  <House w='20' h='20' 
                     fill='#C1C7E0'  
                     className='ml-1' />
               </Link>
            </section>
            
         </main>
      </>
   )
}