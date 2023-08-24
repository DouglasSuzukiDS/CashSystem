import { ActionsType } from "../../types/ActionsType"

import { ArrowLeftLong } from "../../assets/Icons/ArrowLeftLong"
import { CashRegister } from "../../assets/Icons/CashRegister"
import { Gears } from "../../assets/Icons/Gears"
import { LogoBlue } from "../../assets/Icons/Logo Blue"

export const Header = ({ open, handleAboutMeModal, handleCloseSystem, startJob, userInfos, userIsAdmin, handleOptionSystem, handleCloseCash, onClick }: ActionsType) => {
   const admin = userInfos?.userName
   // alert(userIsAdmin)
   const userDatasSection = localStorage.getItem('UserDatas')


   return (
      <header className="headerSystem flex sbt russianGradient">
         <div className="logoSystem text-primary pg3 bold" onClick={handleAboutMeModal}>
            <LogoBlue w="130" h="60" className="pointer" />
         </div>

         <div className="statusSystem flex column" id="statusSystem">
            <p className="text-secondary bold">Caixa 01</p>
            <h4 className="text-danger mt-1" id="statusSystemH4">Caixa Fechado</h4>
         </div>

         <div className="openSystem flex">
            {   // Gears and Buttons
               !open ?
                  <>
                     <ArrowLeftLong w='24' h='24' fill='var(--bs-danger)' className='pointer mr-1' onClick={handleCloseSystem} />

                     <Gears w='24' h='24' fill='var(--bs-secondary)' className='notAllowed' />

                     <button className="btn btn-primary ml-2 border" id="btn_openCash" onClick={startJob} onChange={() => open}>
                        Abrir Caixa
                        <CashRegister w='24' h='24' fill='var(--text)' className='ml-1 text-color' />
                     </button>

                  </> :
                  <>
                     { userIsAdmin ? 
                        <Gears w='24' h='24' fill='var(--bs-secondary)' className='pointer opacity' onClick={handleOptionSystem} /> : 
                        <Gears w='24' h='24' fill='var(--bs-secondary)' className='notAllowed' /> 
                     }

                     {/* { userIsAdmin &&
                        <Gears w='24' h='24' fill='var(--bs-secondary)' className='pointer opacity' onClick={handleOptionSystem} /> 
                     } */}
            
                        {/* { userIsAdmin === true ? 'Sim' : 'Não' } */}
                      <button className="btn btn-danger ml-2 border" id="btn_closeCash" onClick={handleCloseCash} >
                        Fechar Caixa
                        <CashRegister w='24' h='24' fill='var(--text)' className='ml-1 text-color' />
                     </button>
                  </>
            }

         </div>
      </header>
   )
}