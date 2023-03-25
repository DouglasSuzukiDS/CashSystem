import { useState, useEffect, useContext } from "react";

import { CashRegister } from "../../assets/Icons/CashRegister";
import { Gears } from "../../assets/Icons/Gears";
import { HandHoldingDollar } from "../../assets/Icons/HandHoldingDollar";
import { ListCheck } from "../../assets/Icons/ListCheck";
import { MagnifyingGlass } from "../../assets/Icons/MagnifyingGlass";
import { SackDollar } from "../../assets/Icons/SackDollar";
import { Signature } from "../../assets/Icons/Signature";
import { TrashCan } from "../../assets/Icons/TrashCan";
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
import { Texugo } from "../../assets/Icons/Texugo";
import { ProductType } from "../../types/ProductType";
import { CartCircleExclamation } from "../../assets/Icons/cart-circle-exclamation";
import { MessageTexugo } from "../../components/MessageTexugo/MessageTexugo";
import { FindUsers } from "../../components/FindUsers/FindUsers";
import { ManagerSystem } from "../../components/ManagerSystem/ManagerSystem";
import { allProducts } from "../../services/product.service";
import { RegisterUser } from "../RegisterUser/RegisterUser";
import { RegisterProduct } from "../RegisterProduct/RegisterProduct";
import { SystemSatusButton } from "../../components/SystemStatusButton/SystemStatusButton";
import { AddProducts } from "../../components/AddProducts/AddProducts";
import { CartList } from "../../components/CartList/CartList";
import { ProductsContext } from "../../context/Products/ProductsContext";
import { CartListContext } from "../../context/CartList/CartListContext";
import { ConfirmPayment } from "../../components/ConfirmPayment/ConfirmPaymanet";
import { UserContext } from "../../context/User/UserContext";
import { UserPlus } from "../../assets/Icons/UserPlus";
import { UserPen } from "../../assets/Icons/UserPen";
import { Registered } from "../../assets/Icons/Registered";
import { PenToSquare } from "../../assets/Icons/PenToSquare";
import { Download } from "../../assets/Icons/Download";

export const OpenSystem = ({ close }: ActionsType) => {
   const backend = 'http://localhost:3001'
   //const { userData, setUserData } = useContext(UserDataContext)

   const navigate = useNavigate()
   // const auth = useContext(AuthContext)

   // const { userData, setUserData } = useContext(AuthContext)
   const { user } = useContext(AuthContext)
   const { userData, setUserData } = useContext(AuthContext)
   console.log(`Valor de userData no OpenSystem é ${JSON.stringify(userData)}`)
   console.log(`O nome de userData é ${JSON.stringify(userData?.userName)}`)

   type UserDataSection = {
      userName: string,
      userAdmin: boolean
   }

   const [userInfos, setUserInfos] = useState<UserDataSection>()


   // Get All Users
   const [users, setUsers] = useState<UserType[]>([])

   // Get All Products
   const { products, setProducts } = useContext(ProductsContext)
   //const [products, setProducts] = useState<ProductType[]>([])

   // Get CartList
   const { cartList, setCartList } = useContext(CartListContext)

   // Open System
   const [open, setOpen] = useState(false)
   const [OpenCashValue, setOpenCashValue] = useState('')

   // Card
   const [cartItems, setCartItems] = useState<ProductType[]>([])

   // Modals
   const [contentSystemModal, setContentSystemModal] = useState(false)

   //const [infosSystemCloseModal, setInfosSystemCloseModal] = useState(false)

   const [contentSystemStartModal, setContentSystemStartModal] = useState(false)

   const [optionsSystem, setOptionsSystem] = useState(false)

   const [invoicingModal, setInvoicingModal] = useState(false)

   const [findProductsModal, setFindProductsModal] = useState(false)

   const [addProduct, setAddProduct] = useState(false)

   const [cartProductsModal, setCartProductsModal] = useState(false)

   // const [cartList, setCartList] = useState<ProductType[]>([])

   const [closeSystem, setCloseSystem] = useState(false)

   const [newUserModal, setNewUserModal] = useState(false)

   const [managerUsersModal, setManagerUsersModal] = useState(false)

   const [NewProductModal, setNewProductModal] = useState(false)

   const [managerProductsModal, setManagerProductsModal] = useState(false)

   const [managerOption, setManagerOption] = useState(false)

   const [confirmPaymentModal, setConfirmPaymentModal] = useState(false)


   const AuthTokenLC = localStorage.getItem('AuthToken')
   const OpenCashValueLC = localStorage.getItem('openCashValue')
   const userDatasSection = localStorage.getItem('UserDatas')

   //let statusSystemH4 = document.querySelector('#statusSystemH4') as HTMLHeadingElement

   /*useEffect(() => {
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

   useEffect(() => { // checkStatus()
      checkStatus() // Verifica se existe um Token, se existir verifica se o caixa já foi aberto, e verifica quem está logado e se é Admin
      //console.log(allUsers())

      allUsers()
         .then(setUsers)
         .catch(e => console.log(e))
   }, [])

   useEffect(() => {
      verifyOpenCashValue()
   }, [])

   useEffect(() => {
      // if (cartList.length <= 0) {
      //    setCartProductsModal(false)
      // }
      let total = cartList.reduce(
         (sum, item) => sum + parseFloat(item.pdt_price), 0
      ).toFixed(2)

      if(total === '0.00' && cartList.length <= 0) {
         setConfirmPaymentModal(false)
         setCartProductsModal(false)
      }
   }, [cartList])

   /*// Get All Users
   useEffect(() => {
      axios.get(`${backend}/users`)
         .then(response => setUsers(response.data.result))
   }, [])

   // Get All Products
   useEffect(() => {
      axios.get(`${backend}/products`)
         .then(response => setProducts(response.data.result))
   }, [])
   //console.log(products)*/

   // KeyPress Event
   useEffect(() => {
      window.addEventListener('keydown', (event) => {
         if (event.keyCode === 120) { // F9
            //   handleFindProductModal()
            // console.log('useEffect')
         }
      })
   }, [findProductsModal])

   /*useEffect(() => { // Keys event
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
            /*let btn_openCash = document.querySelector('#btn_openCash') as HTMLButtonElement
            let btn_closeCash = document.querySelector('#btn_closeCash') as HTMLButtonElement


            btn_openCash.style.display = 'none'
            btn_closeCash.style.display = 'flex'*/

            if(userDatasSection) {
               console.log(`Valor de userData LC: ${JSON.parse(userDatasSection).userName}`)
               console.log(`Valor de userAdmin LC: ${JSON.parse(userDatasSection).userAdmin}`)
               setUserInfos({
                  userName: JSON.parse(userDatasSection).userName,
                  userAdmin: JSON.parse(userDatasSection).userAdmin,
                  // userName: userData.userName,
                  // userAdmin: userData.userAdmin
               })
            }
         }
      } else {
         setOpen(false)
         navigate('/')
      }
   }

   // -- startJob & verifyOpenCashValue
   const handleCloseCash = () => {
      // localStorage.getItem('openCashValue')

      if (!findProductsModal || !invoicingModal) {
         setFindProductsModal(false)
         setInvoicingModal(false)
      }

      setCloseSystem(!closeSystem)
      setOptionsSystem(false)
      setConfirmPaymentModal(false)
      setAddProduct(false)
      //console.log(closeSystem)
   }

   const handleToogleFindProductModal = () => {
      if (open === false) {
         alert('Por obséquio abra o caixa')
      } else {
         if (invoicingModal) {
            setInvoicingModal(false)
         }

         setManagerProductsModal(!managerProductsModal)
      }
   }

   const handleAddProductModal = () => {
      open ? setAddProduct(!addProduct) : alert('Abra o caixa camarada.')
      setConfirmPaymentModal(false)
      setOptionsSystem(false)
      setCloseSystem(false)
   }

   const optionsSystemModal = () => {
      setConfirmPaymentModal(false)
      setAddProduct(false)
      setOptionsSystem(!optionsSystem)
      // console.log(optionsSystem)
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

   const handleNewUser = () => {
      setOptionsSystem(false)
      setNewUserModal(true)
   }

   const handleManagerUser = () => {
      // setManagerOption(true)
      // return managerOption 
      setOptionsSystem(false)
      setManagerUsersModal(true)
   }

   const handleNewProduct = () => {
      setOptionsSystem(false)
      setNewProductModal(true)
   }

   const handleManagerProduct = () => {
      // setManagerOption(true)
      // return managerOption 
      setOptionsSystem(false)
      setManagerProductsModal(true)
   }

   const startJob = () => {
      //alert(`Valor do localstorage: ${openCashValue}`)
      setContentSystemStartModal(!contentSystemStartModal)

      verifyOpenCashValue()
   }

   const verifyOpenCashValue = () => {
      //console.log(contentSystemModal)
      const openCashValueLC = localStorage.getItem('openCashValue')
      if (openCashValueLC === '' ||
         openCashValueLC === undefined || openCashValueLC !== null) {
         setOpen(!open)
      }
      //console.log(openCashValueLC)

      // 'Gato' para o modal contentSystemStartModal sair do HTML
      setTimeout(() => setContentSystemStartModal(false), 10000)
   }

   const addItemOnCart = (data: ProductType) => {
      // Original
      /*setCartItems([...cartItems, data])
      // setCartItems( [data] )
      console.log(cartItems)
      console.log(cartItems.length)

      if(cartItems.length > 0) {
         setCartProductsModal(true)
      }*/

      setCartList([...cartList, data])

      if (cartList.length > 0) {
         setCartProductsModal(true)
      }
   }

   const handleReturnItems = (data: ProductType) => {
      // Original
      /*setCartItems([...cartItems, data])

      if(cartItems.length < 0) {
         setCartProductsModal(false)
      }*/

      if (cartList.length < 0) {
         setCartProductsModal(false)
      }
   }

   const handleClearCartList = () => {
      console.log(`Antes de limpar: ${cartList.length}`)
      setCartList([])
      console.log(`Depois de limpar: ${cartList.length}`)
      console.log('clear cartList')
   }

   const handleConfirmPayment = () => {
      let total = cartList.reduce(
         (sum, item) => sum + parseFloat(item.pdt_price), 0
      ).toFixed(2)

      if (total < '0.25') {
         alert('Carrinho vazio.')
         setConfirmPaymentModal(false)
      } else {
         setConfirmPaymentModal(!confirmPaymentModal)
         setAddProduct(false)
         setOptionsSystem(false)
         setCloseSystem(false)
      }

   }

   return (
      <main className="containerSystem flex p-3">
         {closeSystem ?? (
            <div className="infosSystemClose" id="infosSystemClose">
               <Closing close={handleCloseCash} />
            </div>
         )}

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
                  {   // Gears and Buttons
                     !open ?
                        <>
                           <Gears w='24' h='24' fill='var(--bs-secondary)' className='notAllowed' />

                           <button className="btn btn-primary ml-2 border" id="btn_openCash" onClick={startJob} onChange={() => setOpen(true)}>
                              {/* <button className="btn btn-primary ml-2 border" id="btn_openCash" onClick={startJob} > */}
                              Abrir Caixa
                              <CashRegister w='24' h='24' fill='var(--text)' className='ml-1 text-color' />
                           </button>

                        </> :
                        <>
                           {/* { user?.userAdmin ? */}
                           { userInfos?.userAdmin ?
                              <>
                                 <Gears w='24' h='24' fill='var(--bs-secondary)' className='pointer opacity' onClick={optionsSystemModal} />

                                 <button className="btn btn-danger ml-2 border" id="btn_closeCash" onClick={handleCloseCash} >
                                    Fechar Caixa
                                    <CashRegister w='24' h='24' fill='var(--text)' className='ml-1 text-color' />
                                 </button> 
                              </> :
                              <>
                                 <Gears w='24' h='24' fill='var(--bs-secondary)' className='notAllowed' />

                                 <button className="btn btn-danger ml-2 border" id="btn_closeCash" onClick={handleCloseCash} >
                                    Fechar Caixa
                                    <CashRegister w='24' h='24' fill='var(--text)' className='ml-1 text-color' />
                                 </button>
                              </>

                           }
                        </>
                  }

               </div>
            </header>

            <div className="contentSystem flex" id="contentSystem">
               {/* { !contentSystemStartModal ? */}
               {!open ?
                  // Caso o caixa não estver aberto
                  <>
                     {!contentSystemStartModal ?
                        <div className="flex" id="contentSystemStart">
                           <OpenCash close={startJob} />
                        </div> : <MessageTexugo msg="Caixa Fechado, meu Chapa." tw="100" th="100" className="mb-2 flex text-danger " />
                     }
                  </> :
                  // Caso o caixa estiver aberto
                  <>
                     {/* // Create new User/Product or Find User/Product */}
                     {optionsSystem ?
                        <section className="managerSystem flex mr-3" onMouseLeave={() => setOptionsSystem(false)}>
                           <ul className="flex column text-dark bold">
                              <li className="flex"
                                 onClick={handleNewUser}>
                                 Novo Usuário
                                 <UserPlus w="20" h="20" fill="var(--bs-info)" className="ml-1"/>
                              </li>

                              <li className="flex"
                                 onClick={handleManagerUser}>
                                 Editar Usuário
                                 <UserPen w="20" h="20" fill="var(--bs-warning)" className="ml-1"/>
                              </li>

                              <li className="flex"
                                 onClick={handleNewProduct}>
                                 Novo Produto
                                 <Registered w="20" h="20" fill="var(--bs-info)" className="ml-1"/>
                              </li>

                              <li className="flex"
                                 onClick={handleManagerProduct}>
                                 Editar Produto
                                 <PenToSquare w="20" h="20" fill="var(--bs-warning)" className="ml-1"/>
                              </li>

                              <li className="flex" 
                                 onClick={ () => {} }>
                                 Backup Geral
                                 <Download w="20" h="20" fill="var(--btn)" className="ml-1"/>
                              </li>
                              
                              <li className="flex" 
                                 onClick={ () => {} }>
                                 Backup de Vendas
                                 <Download w="20" h="20" fill="var(--btn)" className="ml-1"/>
                              </li>

                              <li className="flex" 
                                 onClick={ () => {} }>
                                 Backup de Usuários
                                 <Download w="20" h="20" fill="var(--btn)" className="ml-1"/>
                              </li>

                              <li className="flex" 
                                 onClick={ () => {} }>
                                 Backup Produtos
                                 <Download w="20" h="20" fill="var(--btn)" className="ml-1"/>
                              </li>
                           </ul>
                        </section> : ''
                     }

                     {
                        newUserModal ?
                           <RegisterUser close={() => setNewUserModal(false)} /> : ''
                     }

                     {
                        managerUsersModal ?
                           <FindUsers listUsers={users} close={() => setManagerUsersModal(false)} /> : ''
                     }

                     {
                        NewProductModal ?
                           <RegisterProduct close={() => setNewProductModal(false)} /> : ''
                     }

                     {
                        managerProductsModal ?
                           <FindProducts listProducts={products} close={() => setManagerProductsModal(false)} /> : ''
                     }

                     {/* {
                        !managerProductsModal ?
                        <FindProducts close={ () => setManagerProductsModal(!managerUsersModal) } /> : ''
                     } */}

                     {/* { !open ?
                        <MessageTexugo msg="Abra o caixa, meu Chapa" tw="100" th="100" /> :
                        <MessageTexugo msg="Carrinho vazio, meu Chapa" tw="100" th="100" /> 
                     }  */}

                     {
                        confirmPaymentModal ?
                           <ConfirmPayment close={handleConfirmPayment} /> : ''
                     }

                     {
                        // addProduct ? <AddProducts listProducts={products} close={ handleAddProductModal } cartAddItem={ setCartItems } /> : ''
                        addProduct ? <AddProducts listProducts={products} close={handleAddProductModal} cartAddItem={addItemOnCart} /> : ''
                     }

                     {
                        cartProductsModal ? <CartList listProducts={cartItems} returnItems={handleReturnItems} /> :
                           <MessageTexugo msg="Carrinho vazio, meu Chapa." tw="100" th="100" className="mb-2 flex text-warning" />
                     }

                     {
                        closeSystem ? <Closing close={() => setCloseSystem(false)} /> : ''
                     }


                     {/* {  
                        cartItems.length === 0 ??
                        <MessageTexugo msg="Carrinho vazio meu Chapa" tw="100" th="100" />
                     }  */}

                     {/* { OpenCashValueLC ?
                        <div className="managerArea flex">
                           {findProductsModal &&
                              <FindProducts close={ handleToogleFindProductModal } />
                           }
                        </div> :
                        <div className="none" id="contentSystemStart">
                           <OpenCash />
                        </div>
                     } */}

                     { /* { !closeSystem ??
                         <Closing close={ handleCloseCash } />
                     } */ }


                  </>
               }
            </div>

            <footer className="footerSystem flex sbt">
               <div className="employeerFooterSystem flex column px-2 py-1 mr-3">
                  <p className="pg5 bold text-color">Colaborador</p>

                  <p className="pg4 bold italic text-center text-dark-blue flex column" id="employeerName">
                     { userInfos?.userName === undefined ? userData.userName : userInfos?.userName}
                     <Signature w='24' h='24' fill='var(--dark-blue)' />
                  </p>
               </div>

               <div className="actionsFooterSystem flex mr-3">
                  <button className="btn btn-secondary">
                     F2 Historico
                     <ListCheck w='20' h='20' fill='var(--text)' className='ml-1' />
                  </button>

                  <button className="btn btn-success ml-1" onClick={ handleConfirmPayment }>
                     F4 Finalizar
                     <SackDollar w='20' h='20' fill='var(--text)' className='ml-1' />
                  </button>

                  <button className="btn btn-warning ml-1" onClick={handleAddProductModal} onKeyDown={handleKeyDown}>
                     F9 Pesquisar
                     <MagnifyingGlass w='20' h='20' fill='var(--text-dark)' className='ml-1' />
                  </button>

                  <button className="btn btn-danger ml-1" onClick={handleClearCartList}>
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