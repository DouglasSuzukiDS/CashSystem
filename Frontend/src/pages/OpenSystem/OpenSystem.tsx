import { useState, useEffect, HTMLAttributes, useContext } from "react";
import axios from 'axios'
import CashRegister from "../../assets/Icons/CashRegister";
import Gears from "../../assets/Icons/Gears";
import HandHoldingDollar from "../../assets/Icons/HandHoldingDollar";
import ListCheck from "../../assets/Icons/ListCheck";
import MagnifyingGlass from "../../assets/Icons/MagnifyingGlass";
import SackDollar from "../../assets/Icons/SackDollar";
import Signature from "../../assets/Icons/Signature";
import TrashCan from "../../assets/Icons/TrashCan";
import { Closing } from "../../components/Closing/Closing";
import { Invoicing } from "../../components/Invoicing/Invoice";
import { FindProducts } from "../../components/FindProducts/FindProducts";
import { OpenCash } from "../../components/OpenCash/OpenCash";
import { ActionsType } from "../../types/ActionsType";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";
import { UserType } from "../../types/UserType";
import { EditUser } from "../../components/EditUser/EditUser";
import { EditProduct } from "../../components/EditProduct/EditProduct";
import { allUsers } from "../../services/user.service";

export const OpenSystem = ({ close }: ActionsType) => {
   const backend = 'http://localhost:3001'
   const navigate = useNavigate()
   const auth = useContext(AuthContext)

   const { user } = auth
   const [userInfos, setUserInfos] = useState<UserType | null>()

   const AuthTokenLC = localStorage.getItem('AuthToken')
   const OpenCashValueLC = localStorage.getItem('openCashValue')

   //let statusSystemH4 = document.querySelector('#statusSystemH4') as HTMLHeadingElement

   /* useEffect(() => {
       if(localStorage.getItem('openCashValue').valueOf() !== '') {
          let statusSystemH4 = document.querySelector('#statusSystemH4')
          statusSystemH4.classList.remove('text-danger')
          statusSystemH4.classList.add('text-success')
          statusSystemH4.innerHTML = 'Caixa Aberto'
    
          // Button Status Cash
         let btn_openCash = document.querySelector('#btn_openCash')
         let btn_closeCash = document.querySelector('#btn_closeCash')
    
    
         btn_openCash.style.display = 'none'
         btn_closeCash.style.display = 'flex'
         
       //   let notAllowedClass =[...document.querySelectorAll('.notAllowed')]
       //   notAllowedClass[0].classList.remove('notAllowed')
       //   notAllowedClass[0].style.cursos = 'pointer'
    
         //cashSystem()
       } 
    }, [])*/

   useEffect(() => {
      // setUserInfos(user as UserType)
      console.log(`Infos do user ${user}`)
      setUserInfos(user)
      console.log(userInfos)

      checkStatus() // Verifica se existe um Token, se existir verifica se o caixa já foi aberto

      console.log(allUsers())
   }, [])

   // Get All Users
   const [users, setUsers] = useState([])

   // Get All Products
   const [products, setProducts] = useState([])

   // Open System
   const [open, setOpen] = useState(false)
   const [OpenCashValue, setOpenCashValue] = useState('')

   // Modals
   const [invoicingModal, setInvoicingModal] = useState(false)

   const [findProductsModal, setFindProductsModal] = useState(false)

   const [closeSystem, setCloseSystem] = useState(false)

   // Get All Users
   useEffect(() => {
      axios.get(`${backend}/users`)
         .then(response => setUsers(response.data.result))
   }, [])

   // Get All Products
   useEffect(() => {
      axios.get(`${backend}/products`)
         .then(response => setProducts(response.data.result))
   }, [])
   //console.log(products)

   // KeyPress Event
   useEffect(() => {
      window.addEventListener('keydown', (event) => {
         if (event.keyCode === 120) { // F9
            //   handleFindProductModal()
            // console.log('useEffect')
         }
      })
   }, [findProductsModal])

   /*useEffect(() => {
      window.addEventListener('keydown', (event) => {
         if (event.keyCode === 123) { // F12
            // handleCloseCash()
            // console.log('useEffect')
         }
      })
   }, [])

   useEffect(() => {
      // localStorage.getItem('openCashValue')
      //cashStatus()
   }, []) */

   const checkStatus = () => { // Verifica se existe um Token, se existir verifica se o caixa já foi aberto
      if (AuthTokenLC) {
         //OpenCashValueLC ? setOpen(true) : setOpen(false)
         if (OpenCashValueLC) {
            setOpen(true)
            //setOpenCashValue(OpenCashValueLC)

            // Status Cash System
            let statusSystemH4 = document.querySelector('#statusSystemH4') as HTMLHeadingElement
            statusSystemH4.classList.remove('text-danger')
            statusSystemH4.classList.add('text-success')
            statusSystemH4.innerHTML = 'Caixa Aberto'

            // Button Status Cash
            let btn_openCash = document.querySelector('#btn_openCash') as HTMLButtonElement
            let btn_closeCash = document.querySelector('#btn_closeCash') as HTMLButtonElement


            btn_openCash.style.display = 'none'
            btn_closeCash.style.display = 'flex'
         }
      } else {
         setOpen(false)
         navigate('/')
      }
   }

   const startJob = () => {
      //alert(`Valor do localstorage: ${openCashValue}`)
      const contentSystemStart = document.querySelector('#contentSystemStart') as HTMLDivElement
      contentSystemStart.classList.toggle('flex')

      verifyOpenCashValue()
   }

   const verifyOpenCashValue = () => {
      if (localStorage.getItem('openCashValue') !== '' ||
         localStorage.getItem('openCashValue') !== undefined ||
         localStorage.getItem('openCashValue') !== null) {
         setOpen(true)
      }
   }

   const handleToogleFindProductModal = () => {
      if (open === false) {
         alert('Por obséquio abra o caixa')
      } else {
         if (invoicingModal) {
            setInvoicingModal(false)
         }

         setFindProductsModal(!findProductsModal)
      }
   }

   const handleCloseCash = () => {
      // localStorage.getItem('openCashValue')

      /*if (!findProductsModal || !invoicingModal) {
         setFindProductsModal(false)
         setInvoicingModal(false)
      }*/
      setCloseSystem(!closeSystem)
      console.log(closeSystem)
   }

   const handleKeyDown = () => {
      /*  Blocked Keys
         F1 => Help
         F3 => Find Word
         F5 => Regarrega
         F6 => Fecha e Abre o navegador
         F7 => Fullscreen
      */

      /* Utils Keys
         F2 = 113
         F4 = 115
         F7 = 118
         F8 = 119
         F9 = 120
         F10 = 121
         F12 = 123
      */

      window.addEventListener('keydown', (event) => {
         if (event.keyCode === 113) { // F2 Historico
            alert('F2')
         } else if (event.keyCode === 115) { // F4 Finalizar
            alert('F4')
         } else if (event.keyCode === 120) { // F9 Pesquisar
            // alert('F9')
            handleToogleFindProductModal()
         } else if (event.keyCode === 121) { // F10 Cancelar
            alert('F10')
         } else if (event.keyCode === 123) { // F12 Pagamento
            alert('F12')
         }
      })
   }

   const handleManager = () => {

   }

   return (
      <main className="containerSystem flex p-3">
         <div className="infosSystemClose none" id="infosSystemClose">
            <Closing close={handleCloseCash} />
         </div>

         {/* <div className="flex" id="modals">
            {invoicingModal && <Invoicing close={handleCloseCash} />}

            {findProductsModal && <FindProducts close={handleToogleFindProductModal} />}
         </div> */}

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
                  {
                     !open ?
                        <>
                           <Gears w='24' h='24' fill='var(--bs-secondary)' className='notAllowed' />

                           {/* <button className="btn btn-primary ml-2 border" id="btn_openCash" onClick={ startJob }>
                              Abrir Caixa
                              <CashRegister w='24' h='24' fill='var(--text)' className='ml-1 text-color' />
                           </button> */}
                        </> :
                        <>
                           <Gears w='24' h='24' fill='var(--bs-secondary)' className='pointer opacity' onClick={handleToogleFindProductModal} />

                           {/* <button className="btn btn-danger ml-2 border" id="btn_closeCash" onClick={ handleCloseCash }>
                              Fechar Caixa
                              <CashRegister w='24' h='24' fill='var(--text)' className='ml-1 text-color' />
                           </button> */}
                        </>
                  }

                  <button className="btn btn-primary ml-2 border" id="btn_openCash" onClick={startJob}>
                     Abrir Caixa
                     <CashRegister w='24' h='24' fill='var(--text)' className='ml-1 text-color' />
                  </button>

                  <button className="btn btn-danger ml-2 border" id="btn_closeCash" onClick={handleCloseCash} style={{ display: 'none' }}>
                     Fechar Caixa
                     <CashRegister w='24' h='24' fill='var(--text)' className='ml-1 text-color' />
                  </button>
               </div>
            </header>

            <div className="contentSystem flex" id="contentSystem">
               { OpenCashValueLC ?
                  <>
                     <div className="managerArea flex">
                        {findProductsModal &&
                           <FindProducts close={handleToogleFindProductModal} />
                        }
                     </div>
                  </>
                  :

                  <div className="none" id="contentSystemStart">
                     <OpenCash />
                  </div>
               }

               { !closeSystem ??
                  <Closing close={ handleCloseCash } />
               }              

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

                  <button className="btn btn-warning ml-1" onClick={handleToogleFindProductModal} onKeyDown={handleKeyDown}>
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