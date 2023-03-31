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
import { FindProducts } from "../../components/FindProducts/FindProducts";
import { OpenCash } from "../../components/OpenCash/OpenCash";
import { ActionsType } from "../../types/ActionsType";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";
import { UserType } from "../../types/UserType";
import { allUsers } from "../../services/user.service";
import { ProductType } from "../../types/ProductType";
import { MessageTexugo } from "../../components/MessageTexugo/MessageTexugo";
import { FindUsers } from "../../components/FindUsers/FindUsers";
import { RegisterUser } from "../RegisterUser/RegisterUser";
import { RegisterProduct } from "../RegisterProduct/RegisterProduct";
import { AddProducts } from "../../components/AddProducts/AddProducts";
import { CartList } from "../../components/CartList/CartList";
import { ProductsContext } from "../../context/Products/ProductsContext";
import { CartListContext } from "../../context/CartList/CartListContext";
import { ConfirmPayment } from "../../components/ConfirmPayment/ConfirmPaymanet";
import { UserPlus } from "../../assets/Icons/UserPlus";
import { UserPen } from "../../assets/Icons/UserPen";
import { Registered } from "../../assets/Icons/Registered";
import { PenToSquare } from "../../assets/Icons/PenToSquare";
import { Download } from "../../assets/Icons/Download";
import axios from "axios";
import { SalesType } from "../../types/SalesType";
import { Sales } from "../../components/Sales/Sales";
import { ValuesSalesType } from "../../types/ValuesSalesType";
import { ValeusSalesContext } from "../../context/ValuesSales/ValuesSalesContext";
import { ManagerSystem } from "../../components/ManagerSystem/ManagerSystem";
import { FooterSystem } from "../../components/FooterSystem/FooterSystem";
import { UserDataSectionType } from "../../types/UserDataSectionType";
import { Logo } from "../../assets/Icons/Logo";

export const OpenSystem = ({ close }: ActionsType) => {
   const server = 'http://localhost:3001'

   const navigate = useNavigate()

   // Pega o Nome e Admin do usuário pelo Context
   const { userData, setUserData } = useContext(AuthContext)

   // console.log(`Valor de userData no OpenSystem é ${JSON.stringify(userData)}`)
   // console.log(`O nome de userData é ${JSON.stringify(userData?.userName)}`)
   
   // Recebe o nome do usuario logado e se ele e Admin
   const [userInfos, setUserInfos] = useState<UserDataSectionType>()

   // Get All Users
   const [users, setUsers] = useState<UserType[]>([])

   // Get All Products
   const { products, setProducts } = useContext(ProductsContext)

   // Get CartList
   const { cartList, setCartList } = useContext(CartListContext)

   // Open System
   const [open, setOpen] = useState(false) // Verifica se o Caixa foi Aberto

   // Card
   const [cartItems, setCartItems] = useState<ProductType[]>([])

   // Values Sales
   const {valuesSalesToday, setValuesSalesToday} = useContext(ValeusSalesContext)
   // console.log(valuesSalesToday)

   // Modals

   const [contentSystemStartModal, setContentSystemStartModal] = useState(true) // Mdal responsavel por exibir a abertura do caixa

   const [optionsSystem, setOptionsSystem] = useState(false) // Modal para Funções Administrativas

   const [modalSelected, setModalSelected] = useState(false)

   const [invoicingModal, setInvoicingModal] = useState(false)

   const [findProductsModal, setFindProductsModal] = useState(false) // Modal para Produrar um Produto

   const [newUserModal, setNewUserModal] = useState(false) // Modal Responsavel por exibir o componente de criação de usuário

   const [managerUsersModal, setManagerUsersModal] = useState(false) // Modal responsavel por Listar/Editar os Usuários

   const [NewProductModal, setNewProductModal] = useState(false) // Modal responsavel por exibir o omponente de criação de um novo produto

   const [managerProductsModal, setManagerProductsModal] = useState(false) // Modal responsável por Listar/Editar os Produtos

   const [confirmPaymentModal, setConfirmPaymentModal] = useState(false) // Modal responsável por exibir o componente de Confirmação de Pagamento

   const [addProduct, setAddProduct] = useState(false) // Modal responsavel por mostrar os produtos e seleciona-los para adicionar no carrinho

   const [cartProductsModal, setCartProductsModal] = useState(false) // Modal responsável por exibir os produtos no carrinho

   const [closeSystem, setCloseSystem] = useState(false) // Modal responsavel por mostrar o Fechamento de Caixa

   // LocalStorage Datas
   const AuthTokenLC = localStorage.getItem('AuthToken')
   const OpenCashValueLC = localStorage.getItem('openCashValue')
   const userDatasSection = localStorage.getItem('UserDatas')

   // Texugo
   const hiddenTexugo = document.querySelector('#Texugo')

   // Historico de Vendas
   //let historicSales: HistoricSale[] = []
   const [historicSale, setHistoricSale] = useState<SalesType[]>([])
   const [historicSaleModal, setHistoricSaleModal] = useState(false)


   useEffect(() => { // checkStatus() / Buscar os Usuários
      checkStatus() // Verifica se existe um Token, se existir verifica se o caixa já foi aberto, e verifica quem está logado e se é Admin, e seta os Values nos modais com o valor de abertura (localStorage) e o restante 0
      //console.log(allUsers())

      verifyOpenCashValue()

      allUsers()
         .then(setUsers)
         .catch(e => console.log(e))
      
      setValuesSalesToday({
         openCash: localStorage.getItem("openCashValue")!,
         moneySale: 0,
         moneyTotal: 0,
         pixSale: 0,
         moneyPix: 0,
         debitSale: 0,
         creditSale: 0,
         debitCredit: 0,
         valuesBankSale: 0,
         totalSale: 0
      })
   }, [])

   useEffect(() => { // Soma o valor dos produtos na lista
      let total = cartList.reduce(
         (sum, item) => sum + parseFloat(item.pdt_price), 0
      ).toFixed(2)

      if (total === '0.00' && cartList.length <= 0) {
         setConfirmPaymentModal(false)
         setCartProductsModal(false)
      }
   }, [cartList])

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

   const checkStatus = () => { // Verifica se existe um Token, se existir verifica se o caixa já foi aberto, e seta os dados do usuario (nome, e se e admin) 
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

            /*if (userDatasSection) {
               console.log(`Valor de userData LC: ${JSON.parse(userDatasSection).userName}`)
               console.log(`Valor de userAdmin LC: ${JSON.parse(userDatasSection).userAdmin}`)

               setUserInfos({
                  userName: JSON.parse(userDatasSection).userName,
                  userAdmin: JSON.parse(userDatasSection).userAdmin,
               })
            }*/

            checkUserInfos()
         }
      } else {
         setOpen(false)
         navigate('/')
      }
   }

   const checkUserInfos = () => {
      if (userDatasSection) {
         console.log(`Valor de userData LC: ${JSON.parse(userDatasSection).userName}`)
         console.log(`Valor de userAdmin LC: ${JSON.parse(userDatasSection).userAdmin}`)

         setUserInfos({
            userName: JSON.parse(userDatasSection).userName,
            userAdmin: JSON.parse(userDatasSection).userAdmin,
         })
      }
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

   // Abertura de Caixa
   const startJob = () => {
      //alert(`Valor do localstorage: ${openCashValue}`)
      setContentSystemStartModal(!contentSystemStartModal)

      verifyOpenCashValue()
   }

   // -- Fechamento do Caixa/Sistema
   const handleCloseCash = () => {
      // localStorage.getItem('openCashValue')

      // if (!findProductsModal || !invoicingModal) {
      //    setFindProductsModal(false)
      //    setInvoicingModal(false)
      // }

      if(historicSaleModal) {
         setHistoricSaleModal(false)
      }

      if(confirmPaymentModal) {
         setConfirmPaymentModal(false)
      }

      if(addProduct) {
         setAddProduct(false)
      }

      setCloseSystem(!closeSystem)
      
      setOptionsSystem(false)
      setConfirmPaymentModal(false)
      setAddProduct(false)
      //console.log(closeSystem)
   }

   // Função Responsável por mostrar o Modal de Produtos
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

   // Função Responsável por mostrar o Modal de Adicionar Produto no Carrinho
   const handleAddProductModal = () => {
      //open ? setAddProduct(!addProduct) : alert('Abra o caixa camarada.')

      if (open) {
         if(historicSaleModal) {
            setHistoricSaleModal(false)
         }

         setAddProduct(!addProduct)
         setConfirmPaymentModal(false)
         setOptionsSystem(false)
         setCloseSystem(false)

      } else {
         alert('Abra o caixa camarada.')
      }

   }

   const handleOptionSystem = () => {
      if(newUserModal || managerUsersModal) {
         setNewUserModal(false)
         setManagerUsersModal(false)
      }

      if(NewProductModal || managerProductsModal) {
         setNewProductModal(false)
         setManagerProductsModal(false)
      }

      if(historicSaleModal) {
         setHistoricSaleModal(false)
      }

      if(confirmPaymentModal) {
         setConfirmPaymentModal(false)
      }

      if(addProduct) {
         setAddProduct(false)
      }


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

   // Footer Functions

   const handleHistoricModal = async() => { // F2
      if(open) {
         await axios.get(`${server}/SaleDayList`)
            .then(res => {
               console.log(res.data.result)
               setHistoricSale(res.data.result)
            })
            .catch(err => console.log(err))
   
         if(optionsSystem) {
            setOptionsSystem(false)
         }

         if(closeSystem) {
            setCloseSystem(false)
         }

         if(confirmPaymentModal) {
            setConfirmPaymentModal(false)
         }

         if(addProduct) {
            setAddProduct(false)
         }
      
         setHistoricSaleModal(!historicSaleModal)
      } else {
         alert('Abra o caixa camarada.')
      }
   }

   const handleConfirmPayment = () => { // F4
      if (open) {
         let total = cartList.reduce(
            (sum, item) => sum + parseFloat(item.pdt_price), 0
         ).toFixed(2)

         if (total < '0.25') {
            alert('Carrinho vazio.')
            setConfirmPaymentModal(false)
         } else {

            if(historicSaleModal) {
               setHistoricSaleModal(false)
            }
           
            setConfirmPaymentModal(!confirmPaymentModal)
            setAddProduct(false)
            setOptionsSystem(false)
            setCloseSystem(false)


            if(cartList.length <= 0) {
               setModalSelected(!modalSelected)
            }
         }
      } else {
         alert('Abra o caixa camarada.')
      }
   }

   const handleClearCartList = () => { // F10
      if (open) {
         if (cartList.length > 0) {
            console.log(`Antes de limpar: ${cartList.length}`)
            setCartList([])
            console.log(`Depois de limpar: ${cartList.length}`)
            console.log('clear cartList')
         } else {
            alert('Carrinho vazio.')
         }
      } else {
         alert('Abra o caixa camarada.')
      }

   }

   return (
      <main className="containerSystem flex p-3">
         {closeSystem ?? ( // Fechamento de Caixa
            <div className="infosSystemClose" id="infosSystemClose">
               <Closing close={handleCloseCash} />
            </div>
         )}

         <section className="sectionSystem">
            <header className="headerSystem flex sbt">
               <div className="logoSystem text-primary pg3 bold">
                  <Logo w="130" h="60" className="pointer" />
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
                           {userInfos?.userAdmin ?
                              <>
                                 <Gears w='24' h='24' fill='var(--bs-secondary)' className='pointer opacity' onClick={handleOptionSystem} />

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
               {!open ? // Verifica se o Caixa foi Aberto
                  // Caso o caixa não estver aberto
                  <>
                     {!contentSystemStartModal ? // Abertura de Caixa
                        <div className="flex" id="contentSystemStart">
                           <OpenCash close={startJob} />
                        </div> : <MessageTexugo msg="Caixa Fechado, meu Chapa." tw="100" th="100" className="mb-2 flex text-danger " />
                     }
                  </> :
                  // Caso o caixa estiver aberto
                  <>
                     {/* // Create new User/Product or Find User/Product */}
                     {/* {optionsSystem ?
                        // <section className="managerSystem flex mr-3" onMouseLeave={() => setOptionsSystem(false)}>
                        <section className="managerSystem flex mr-3" onMouseLeave={handleOptionSystem}>
                           <ul className="flex column text-dark bold">
                              <li className="flex"
                                 onClick={handleNewUser}>
                                 Novo Usuário
                                 <UserPlus w="20" h="20" fill="var(--bs-info)" className="ml-1" />
                              </li>

                              <li className="flex"
                                 onClick={handleManagerUser}>
                                 Editar Usuário
                                 <UserPen w="20" h="20" fill="var(--bs-warning)" className="ml-1" />
                              </li>

                              <li className="flex"
                                 onClick={handleNewProduct}>
                                 Novo Produto
                                 <Registered w="20" h="20" fill="var(--bs-info)" className="ml-1" />
                              </li>

                              <li className="flex"
                                 onClick={ handleManagerProduct }>
                                 Editar Produto
                                 <PenToSquare w="20" h="20" fill="var(--bs-warning)" className="ml-1" />
                              </li>

                              <li className="flex"
                                 onClick= { handleBackup }>
                                 Backup Geral
                                 <Download w="20" h="20" fill="var(--btn)" className="ml-1" />
                              </li>

                              <li className="flex"
                                 onClick={ handleBackupSales }>
                                 Backup de Vendas
                                 <Download w="20" h="20" fill="var(--btn)" className="ml-1" />
                              </li>

                              <li className="flex"
                                 onClick={ handleBackupUsers }>
                                 Backup de Usuários
                                 <Download w="20" h="20" fill="var(--btn)" className="ml-1" />
                              </li>

                              <li className="flex"
                                 onClick={ handleBackupProducts }>
                                 Backup Produtos
                                 <Download w="20" h="20" fill="var(--btn)" className="ml-1" />
                              </li>
                           </ul>
                        </section> : ''
                     } */}

                     { optionsSystem ?
                        <ManagerSystem 
                           handleOptionSystem = { handleOptionSystem } 
                           handleNewUser = { handleNewUser } 
                           handleManagerUser = { handleManagerUser }
                           handleNewProduct = { handleNewProduct }
                           handleManagerProduct = { handleManagerProduct }
                        /> : ''
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

                     {
                        historicSaleModal ?
                           <Sales listSales={ historicSale } valuesSales={ valuesSalesToday } close={ () =>  setHistoricSaleModal(!historicSaleModal) } /> : ''
                     }

                     {
                        confirmPaymentModal ?
                           <ConfirmPayment close={handleConfirmPayment} /> : ''
                     }

                     {
                        addProduct ? <AddProducts listProducts={products} close={handleAddProductModal} cartAddItem={addItemOnCart} /> : ''
                     }

                     {
                        cartProductsModal ? <CartList listProducts={cartItems} returnItems={handleReturnItems} /> :
                        <span id="Texugo">
                           <MessageTexugo msg="Carrinho vazio, meu Chapa." tw="100" th="100" className="mb-2 flex text-warning" />
                        </span>
                     }

                     {
                        closeSystem ? <Closing close={handleCloseCash} /> : ''
                     }

                  </>
               }
            </div>

            {/* <footer className="footerSystem flex sbt">
               <div className="employeerFooterSystem flex column px-2 py-1 mr-3">
                  <p className="pg5 bold text-color">Colaborador</p>

                  <p className="pg4 bold italic text-center text-dark-blue flex column" id="employeerName">
                     {userInfos?.userName === undefined ? userData.userName : userInfos?.userName}
                     <Signature w='24' h='24' fill='var(--dark-blue)' />
                  </p>
               </div>

               <div className="actionsFooterSystem flex mr-3">
                  <button className="btn btn-secondary" onClick={ handleHistoricModal } >
                     F2 Historico
                     <ListCheck w='20' h='20' fill='var(--text)' className='ml-1' />
                  </button>

                  <button className="btn btn-success ml-1" onClick={ handleConfirmPayment }>
                     F4 Finalizar
                     <SackDollar w='20' h='20' fill='var(--text)' className='ml-1' />
                  </button>

                  <button className="btn btn-warning ml-1" onClick={ handleAddProductModal } onKeyDown={ handleKeyDown }>
                     F9 Pesquisar
                     <MagnifyingGlass w='20' h='20' fill='var(--text-dark)' className='ml-1' />
                  </button>

                  <button className="btn btn-danger ml-1" onClick={ handleClearCartList }>
                     F10 Cancelar
                     <TrashCan w='20' h='20' fill='var(--text)' className='ml-1' />
                  </button>

                  <button className="btn btn-primary ml-1">
                     F12 Pagamento
                     <HandHoldingDollar w='20' h='20' fill='var(--text)' className='ml-1' />
                  </button>

               </div>
            </footer> */}

            <FooterSystem 
               userInfos = { userInfos }
               handleHistoricModal = { handleHistoricModal }
               handleConfirmPayment = { handleConfirmPayment }
               handleAddProductModal = {  handleAddProductModal }
               handleClearCartList = { handleClearCartList }
               onKeyDown = { handleKeyDown }
            />
         </section>
      </main>
   )
}