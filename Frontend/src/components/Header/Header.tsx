import { useEffect } from "react"
import { ArrowLeftLong } from "../../assets/Icons/ArrowLeftLong"
import { CashRegister } from "../../assets/Icons/CashRegister"
import { Gears } from "../../assets/Icons/Gears"
import { LogoBlue } from "../../assets/Icons/Logo Blue"
import { ActionsType } from "../../types/ActionsType"

export const Header = ({ open, handleAboutMeModal, handleCloseSystem, startJob, userInfos, handleOptionSystem, handleCloseCash, onClick }: ActionsType) => {
   // LocalStorage Datas

   return(
      <header className="headerSystem flex sbt russianGradient">
               <div className="logoSystem text-primary pg3 bold" onClick={ handleAboutMeModal }>
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
                           <ArrowLeftLong w='24' h='24' fill='var(--bs-danger)' className='pointer mr-1' onClick={ handleCloseSystem }/>

                           <Gears w='24' h='24' fill='var(--bs-secondary)' className='notAllowed' />

                           <button className="btn btn-primary ml-2 border" id="btn_openCash" onClick={ startJob } onChange={() => open}>
                              {/* <button className="btn btn-primary ml-2 border" id="btn_openCash" onClick={startJob} > */}
                              Abrir Caixa
                              <CashRegister w='24' h='24' fill='var(--text)' className='ml-1 text-color' />
                           </button>

                        </> :
                        <>
                           {/* { user?.userAdmin ? */}
                           {userInfos?.userAdmin ?
                              <>
                                 <Gears w='24' h='24' fill='var(--bs-secondary)' className='pointer opacity' onClick={ handleOptionSystem } />

                                 <button className="btn btn-danger ml-2 border" id="btn_closeCash" onClick={ handleCloseCash } >
                                    Fechar Caixa
                                    <CashRegister w='24' h='24' fill='var(--text)' className='ml-1 text-color' />
                                 </button>
                              </> :
                              <>
                                 <Gears w='24' h='24' fill='var(--bs-secondary)' className='notAllowed' />

                                 <button className="btn btn-danger ml-2 border" id="btn_closeCash" onClick={ handleCloseCash } >
                                    Fechar Caixa
                                    <CashRegister w='24' h='24' fill='var(--text)' className='ml-1 text-color' />
                                 </button>
                              </>

                           }
                        </>
                  }

               </div>
            </header>
   )
}