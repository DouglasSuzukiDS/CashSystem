import { useEffect } from "react";
import CashRegister from "../../assets/Icons/CashRegister";
import Gears from "../../assets/Icons/Gears";
import HandHoldingDollar from "../../assets/Icons/HandHoldingDollar";
import ListCheck from "../../assets/Icons/ListCheck";
import MagnifyingGlass from "../../assets/Icons/MagnifyingGlass";
import SackDollar from "../../assets/Icons/SackDollar";
import Signature from "../../assets/Icons/Signature";
import TrashCan from "../../assets/Icons/TrashCan";
import Closing from "../../Components/Closing/Closing";
import Invoicing from "../../Components/Invoicing/Invoice";


// let employeerName = document.querySelector('#employeerName')

const closingCash = () => {
   let infosSystemClose = document.querySelector('.infosSystemClose')

   infosSystemClose.classList === 'flex' ? 
      infosSystemClose.classList.toggle('none') : infosSystemClose.classList.toggle('flex')
}

export default function OpenSystem() {
   useEffect(() => {
      window.addEventListener('keydown', (event) => {
         if (event.keyCode === 123) { // F12
            closingCash()
            console.log('useEffect')
         } 
      })
   }, [])

   return (
      <main className="containerSystem flex p-3 border">
         <div className="infosSystemClose none">
            <Closing />
         </div>

         <div className="infosSystemInvoicinf none">
            <Invoicing />
         </div>

         <section className="sectionSystem">
            <header className="headerSystem flex sbt">
               <div className="logoSystem text-primary pg3 bold">
                  CashSystem
               </div>

               <div className="statusSystem flex column">
                  <p className="text-secondary bold">Caixa 01</p>
                  <h4 className="text-danger mt-1">Caixa Fechado</h4>
               </div>
      
               <div className="openSystem flex">
                  <Gears w='24' h='24' fill='var(--bs-secondary)' className='notAllowed' />

                  <button className="btn btn-primary ml-2 border">
                     Abrir Caixa
                     <CashRegister w='24' h='24' fill='var(--text)' className='ml-1 text-color' />
                  </button>
               </div>
            </header>

            <div className="contentSystem">
               {/* ContentSystem */}
            </div>

            <footer className="footerSystem flex sbt">
               <div className="employeerFooterSystem flex column px-2 py-1 mr-3">
                  <p className="pg5 bold text-color">Colaborador</p>

                  <p className="pg3 bold italic text-dark-blue flex column" id="employeerName">
                     Chico Palha 
                     {/* { employeerName } */}
                     <Signature w='24' h='24' fill='var(--dark-blue)' />
                  </p>
               </div>

               <div className="actionsFooterSystem flex mr-3">
                  <button className="btn btn-secondary">
                     F2 Historico
                     <ListCheck w='20' h='20' fill='var(--text)'  className='ml-1' />
                  </button>

                  <button className="btn btn-success ml-1">
                     F4 Finalizar
                     <SackDollar w='20' h='20' fill='var(--text)'  className='ml-1' />
                  </button>

                  <button className="btn btn-warning ml-1">
                     F9 Pesquisar
                     <MagnifyingGlass w='20' h='20' fill='var(--text-dark)'  className='ml-1' />
                  </button>

                  <button className="btn btn-danger ml-1">
                     F10 Cancelar
                     <TrashCan w='20' h='20' fill='var(--text)'  className='ml-1' />
                  </button>

                  <button className="btn btn-primary ml-1" onClick={ closingCash }>
                     F12 Pagamento
                     <HandHoldingDollar w='20' h='20' fill='var(--text)'  className='ml-1' />
                  </button>

               </div>
            </footer>
         </section>
      </main>
   )
}