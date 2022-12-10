import { useState, useEffect } from "react";
import axios from 'axios'
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
import OpenCash from "../../Components/OpenCash/OpenCash";
import FindProducts from "../../Components/FindProducts/FindProducts";

export default function OpenSystem(props) {
   const backend = 'http://localhost:3001'

   const startJob = () => {
      // alert(`Valor do localstorage: ${openCashValue}`)
      const contentSystemStart = document.querySelector('#contentSystemStart')
      contentSystemStart.classList.toggle('flex')
      let openCashValue = localStorage.getItem('openCashValue')
   }

   let infosSystemFindProducts = document.querySelector('#infosSystemFindProducts')
   let infosSystemClose = document.querySelector('#infosSystemClose')

   const closeFindProductModal = () => {

      infosSystemFindProducts.classList === 'flex' ?
         infosSystemFindProducts.classList.toggle('none') : infosSystemFindProducts.classList.toggle('flex')

      infosSystemClose.classList.add('none')
   }
   console.log(infosSystemFindProducts)

   const closingCash = () => {

      infosSystemClose.classList === 'none' ?
         infosSystemClose.classList.toggle('flex') : infosSystemClose.classList.toggle('none')

      localStorage.getItem('openCashValue')

      infosSystemFindProducts.classList.add('none')

   }

   // Get All Users
   const [users, setUsers] = useState([])

   useEffect(() => {
      axios.get(`${backend}/users`)
         .then(response => setUsers(response.data.result))
   }, [])
   //console.log(users)

   // Get All Products
   const [products, setProducts] = useState([])

   useEffect(() => {
      axios.get(`${backend}/products`)
         .then(response => setProducts(response.data.result))
   }, [])
   //console.log(products)

   useEffect(() => {
      window.addEventListener('keydown', (event) => {
         if (event.keyCode === 120) { // F9
            closeFindProductModal()
            // console.log('useEffect')
         }
      })
   }, [])

   useEffect(() => {
      window.addEventListener('keydown', (event) => {
         if (event.keyCode === 123) { // F12
            closingCash()
            // console.log('useEffect')
         }
      })
   }, [])

   useEffect(() => {
      localStorage.getItem('openCashValue')
   }, [])

   let status = false

   return (
      <main className="containerSystem flex p-3">
         <div className="infosSystemClose none" id="infosSystemClose">
            <Closing close={closingCash} openCashValue={localStorage.getItem('openCashValue')} />
         </div>

         <div className="infosSystemInvoicing none">
            <Invoicing close={closingCash} />
         </div>

         <div className="infosSystemFindProducts none" id="infosSystemFindProducts">
            <FindProducts close={closeFindProductModal} />
         </div>

         <section className="sectionSystem">
            <header className="headerSystem flex sbt">
               <div className="logoSystem text-primary pg3 bold">
                  CashSystem
               </div>

               <div className="statusSystem flex column" id="statusSystem">
                  <p className="text-secondary bold">Caixa 01</p>
                  <h4 className="text-danger mt-1" id="statusSystemH4">Caixa Fechado</h4>
               </div>

               <div className="openSystem flex">
                  <Gears w='24' h='24' fill='var(--bs-secondary)' className='notAllowed' />

                  <button className="btn btn-primary ml-2 border" id="btn_openCash" onClick={startJob}>
                     Abrir Caixa
                     <CashRegister w='24' h='24' fill='var(--text)' className='ml-1 text-color' />
                  </button>

                  <button className="btn btn-danger ml-2 border" id="btn_closeCash" style={{display: 'none'}} onClick={closingCash}>
                     Fechar Caixa
                     <CashRegister w='24' h='24' fill='var(--text)' className='ml-1 text-color' />
                  </button>


               </div>
            </header>

            <div className="contentSystem flex" id="contentSystem">
               <div className="none" id="contentSystemStart">
                  <OpenCash close={startJob} />
                  <p>Teste</p>
               </div>
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
                     <ListCheck w='20' h='20' fill='var(--text)' className='ml-1' />
                  </button>

                  <button className="btn btn-success ml-1">
                     F4 Finalizar
                     <SackDollar w='20' h='20' fill='var(--text)' className='ml-1' />
                  </button>

                  <button className="btn btn-warning ml-1" onClick={closeFindProductModal}>
                     F9 Pesquisar
                     <MagnifyingGlass w='20' h='20' fill='var(--text-dark)' className='ml-1' />
                  </button>

                  <button className="btn btn-danger ml-1">
                     F10 Cancelar
                     <TrashCan w='20' h='20' fill='var(--text)' className='ml-1' />
                  </button>

                  <button className="btn btn-primary ml-1">
                     F12 Pagamento
                     <HandHoldingDollar w='20' h='20' fill='var(--text)' className='ml-1' />
                  </button>

               </div>
            </footer>
         </section>
      </main>
   )
}