import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { CashRegister } from "../../assets/Icons/CashRegister";
import { Gears } from "../../assets/Icons/Gears";
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
import { SalesType } from "../../types/SalesType";
import { Sales } from "../../components/Sales/Sales";
import { ValeusSalesContext } from "../../context/ValuesSales/ValuesSalesContext";
import { ManagerSystem } from "../../components/ManagerSystem/ManagerSystem";
import { FooterSystem } from "../../components/FooterSystem/FooterSystem";
import { UserDataSectionType } from "../../types/UserDataSectionType";
import { ArrowLeftLong } from "../../assets/Icons/ArrowLeftLong";
import { allProducts } from "../../services/product.service";
import { LogoBlue } from "../../assets/Icons/Logo Blue";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import { References } from "../../components/References/References";
import { Header } from "../../components/Header/Header";

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

   const [contentSystemStartModal, setContentSystemStartModal] = useState(true) // Modal responsavel por exibir a abertura do caixa

   const [aboutMeModal, setAboutMeModal] = useState(false) // Modal responsável por exibir as minhas informações

   const [optionsSystem, setOptionsSystem] = useState(false) // Modal para Funções Administrativas

   const [modalSelected, setModalSelected] = useState(false)

   const [invoicingModal, setInvoicingModal] = useState(false) // Modal das vendas do dia

   const [findProductsModal, setFindProductsModal] = useState(false) // Modal para Produrar um Produto

   const [newUserModal, setNewUserModal] = useState(false) // Modal Responsavel por exibir o componente de criação de usuário

   const [managerUsersModal, setManagerUsersModal] = useState(false) // Modal responsavel por Listar/Editar os Usuários

   const [newProductModal, setNewProductModal] = useState(false) // Modal responsavel por exibir o omponente de criação de um novo produto

   const [managerProductsModal, setManagerProductsModal] = useState(false) // Modal responsável por Listar/Editar os Produtos

   const [confirmPaymentModal, setConfirmPaymentModal] = useState(false) // Modal responsável por exibir o componente de Confirmação de Pagamento

   const [addProduct, setAddProduct] = useState(false) // Modal responsavel por mostrar os produtos e seleciona-los para adicionar no carrinho

   const [cartProductsModal, setCartProductsModal] = useState(false) // Modal responsável por exibir os produtos no carrinho

   const [referencesModal, setReferencesModal] = useState(false) // // Modal responsável por exibir o Modal com as Reerências

   const [closeSystem, setCloseSystem] = useState(false) // Modal responsavel por mostrar o Fechamento de Caixa

   // Historico de Vendas
   //let historicSales: HistoricSale[] = []
   const [historicSale, setHistoricSale] = useState<SalesType[]>([]) // Lista das vendas do dia
   const [historicSaleModal, setHistoricSaleModal] = useState(false) // Modal responsável por mostrar as vendas do dia

   // LocalStorage Datas
   const AuthTokenLC = localStorage.getItem('AuthToken')
   const OpenCashValueLC = localStorage.getItem('openCashValue')
   const userDatasSection = localStorage.getItem('UserDatas')

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

   useEffect(() => {
      allProducts()
         .then(setProducts)
         .catch(e => console.log(e))
   }, [addProduct])

   
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

            checkUserInfos()
         }
      } else {
         setOpen(false)
         navigate('/')
      }
   }

   const checkUserInfos = () => { // Verifica as informações de usuário logado
      if (userDatasSection) {
         console.log(`Valor de userData LC: ${JSON.parse(userDatasSection).userName}`)
         console.log(`Valor de userAdmin LC: ${JSON.parse(userDatasSection).userAdmin}`)

         setUserInfos({
            userName: JSON.parse(userDatasSection).userName,
            userAdmin: JSON.parse(userDatasSection).userAdmin,
         })
      }
   }
 
   const verifyOpenCashValue = () => { // Verifica se foi informado o valor da abertura do caixa
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
   const handleCloseCash = async() => {
      if(
         aboutMeModal ||
         optionsSystem ||
         invoicingModal ||
         findProductsModal || 
         newUserModal ||
         managerUsersModal ||
         newProductModal ||
         managerProductsModal ||
         confirmPaymentModal || 
         addProduct || 
         referencesModal || // Modal responsável por exibir o Modal com as Referências
         historicSaleModal
      ) {
         setAboutMeModal(false)
         setOptionsSystem(false)
         setInvoicingModal(false)
         setFindProductsModal(false)
         setNewUserModal(false) 
         setManagerUsersModal(false) 
         setNewProductModal(false)
         setManagerProductsModal(false)
         setConfirmPaymentModal(false)
         setHistoricSaleModal(false)
         setReferencesModal(false)
         setAddProduct(false)
      }
      
      setCloseSystem(!closeSystem)

   }

   // -- Sair do sistema sem ter aberto o Caixa
   const handleCloseSystem = async() => {
      await localStorage.removeItem('openCashValue')
      await localStorage.removeItem('AuthToken')
      await localStorage.removeItem('UserDatas')
      window.location.href = 'http://localhost:3000'
   }

   // -- Função resposavel por exibir ou não o Modal com as minhas informações
   const handleAboutMeModal = () => {
      if(
         optionsSystem ||
         invoicingModal ||
         findProductsModal || 
         newUserModal ||
         managerUsersModal ||
         newProductModal ||
         managerProductsModal ||
         confirmPaymentModal || 
         addProduct || 
         historicSaleModal || 
         referencesModal || // Modal responsável por exibir o Modal com as Referências
         closeSystem
      ) {
         setOptionsSystem(false)
         setInvoicingModal(false)
         setFindProductsModal(false)
         setNewUserModal(false) 
         setManagerUsersModal(false) 
         setNewProductModal(false)
         setManagerProductsModal(false)
         setConfirmPaymentModal(false)
         setAddProduct(false)
         setHistoricSaleModal(false)
         setReferencesModal(false)
         setCloseSystem(false)
      }

      setAboutMeModal(!aboutMeModal)
   }

   // -- Função responsável por mostrar o Modal de Produtos
   const handleFindProductModal = () => {
      if (open === false) {
         alert('Por obséquio abra o caixa')
      } else {
         if(
            aboutMeModal || // Infos about me
            optionsSystem || // Modal para Funções Administrativas
            invoicingModal || // Modal das vendas do dia
            findProductsModal || // Modal para Produrar um Produto
            newUserModal || // Modal Responsavel por exibir o componente de criação de usuário
            managerUsersModal || // Modal responsavel por Listar/Editar os Usuários
            newProductModal || // Modal responsavel por exibir o componente de criação de um novo produto
            confirmPaymentModal ||  // Modal responsável por exibir o componente de Confirmação de Pagamento
            addProduct ||  // Modal responsavel por mostrar os produtos e seleciona-los para adicionar no carrinho
            historicSaleModal || // Modal responsável por mostrar as vendas do dia
            referencesModal || // Modal responsável por exibir o Modal com as Referências
            closeSystem // Modal responsavel por mostrar o Fechamento de Caixa
         ) {
            setAboutMeModal(false)
            setOptionsSystem(false)
            setInvoicingModal(false)
            setFindProductsModal(false)
            setNewUserModal(false) 
            setManagerUsersModal(false) 
            setNewProductModal(false)
            setConfirmPaymentModal(false)
            setAddProduct(false)
            setHistoricSaleModal(false)
            setReferencesModal(false)
            setCloseSystem(false)
         }

         setManagerProductsModal(!managerProductsModal)
      }
   }

   // -- Função responsável por mostrar o Modal de Adicionar Produto no Carrinho
   const handleAddProductModal = () => {
      //open ? setAddProduct(!addProduct) : alert('Abra o caixa camarada.')

      if(open) {
         if(
            aboutMeModal || // Infos about me
            optionsSystem || // Modal para Funções Administrativas
            invoicingModal || // Modal das vendas do dia
            findProductsModal || // Modal para Produrar um Produto
            newUserModal || // Modal Responsavel por exibir o componente de criação de usuário
            managerUsersModal || // Modal responsavel por Listar/Editar os Usuários
            newProductModal || // Modal responsavel por exibir o omponente de criação de um novo produto
            managerProductsModal || // Modal responsável por Listar/Editar os Produtos
            confirmPaymentModal ||  // Modal responsável por exibir o componente de Confirmação de Pagamento
            historicSaleModal || // Modal responsável por mostrar as vendas do dia
            referencesModal || // Modal responsável por exibir o Modal com as Referências
            closeSystem // Modal responsavel por mostrar o Fechamento de Caixa
         ) {
            setAboutMeModal(false)
            setOptionsSystem(false)
            setInvoicingModal(false)
            setFindProductsModal(false)
            setNewUserModal(false) 
            setManagerUsersModal(false) 
            setNewProductModal(false)
            setManagerProductsModal(false)
            setConfirmPaymentModal(false)
            setHistoricSaleModal(false)
            setReferencesModal(false)
            setCloseSystem(false)
         }

         setAddProduct(!addProduct) // Modal responsavel por mostrar os produtos e seleciona-los para adicionar no carrinho
      } else {
         alert('Abra o caixa camarada.')
      }

   }

   // --  Função reponsável para mostrar o Modal com funções Administrativas
   const handleOptionSystem = () => {
      if(
         aboutMeModal || // Infos about me
         invoicingModal || // Modal das vendas do dia
         findProductsModal || // Modal para Produrar um Produto
         newUserModal || // Modal Responsavel por exibir o componente de criação de usuário
         managerUsersModal || // Modal responsavel por Listar/Editar os Usuários
         newProductModal || // Modal responsavel por exibir o omponente de criação de um novo produto
         managerProductsModal || // Modal responsável por Listar/Editar os Produtos
         confirmPaymentModal ||  // Modal responsável por exibir o componente de Confirmação de Pagamento
         addProduct ||  // Modal responsavel por mostrar os produtos e seleciona-los para adicionar no carrinho
         historicSaleModal || // Modal responsável por mostrar as vendas do dia
         referencesModal || // Modal responsável por exibir o Modal com as Referências
         closeSystem // Modal responsavel por mostrar o Fechamento de Caixa
      ) {
         setAboutMeModal(false)
         setInvoicingModal(false)
         setFindProductsModal(false)
         setNewUserModal(false) 
         setManagerUsersModal(false) 
         setNewProductModal(false)
         setManagerProductsModal(false)
         setConfirmPaymentModal(false)
         setAddProduct(false)
         setHistoricSaleModal(false)
         setReferencesModal(false)
         setCloseSystem(false)
      }

      setOptionsSystem(!optionsSystem) // Modal para Funções Administrativas
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
            handleFindProductModal()
         } else if (event.keyCode === 121) { // F10 Cancelar
            alert('F10')
         } else if (event.keyCode === 123) { // F12 Pagamento
            alert('F12')
         }
      })
   }

   // -- Função responsável por exibir o componente de criação de usuário
   const handleNewUser = () => {
      if(
         aboutMeModal || // Infos about me
         optionsSystem || // Modal para Funções Administrativas
         invoicingModal || // Modal das vendas do dia
         findProductsModal || // Modal para Produrar um Produto
         managerUsersModal || // Modal responsavel por Listar/Editar os Usuários
         newProductModal || // Modal responsavel por exibir o omponente de criação de um novo produto
         managerProductsModal || // Modal responsável por Listar/Editar os Produtos
         confirmPaymentModal ||  // Modal responsável por exibir o componente de Confirmação de Pagamento
         addProduct ||  // Modal responsavel por mostrar os produtos e seleciona-los para adicionar no carrinho
         historicSaleModal || // Modal responsável por mostrar as vendas do dia
         referencesModal || // Modal responsável por exibir o Modal com as Referências
         closeSystem // Modal responsavel por mostrar o Fechamento de Caixa
      ) {
         setAboutMeModal(false)
         setOptionsSystem(false)
         setInvoicingModal(false)
         setFindProductsModal(false)
         setManagerUsersModal(false) 
         setNewProductModal(false)
         setManagerProductsModal(false)
         setConfirmPaymentModal(false)
         setAddProduct(false)
         setHistoricSaleModal(false)
         setReferencesModal(false)
         setCloseSystem(false)
      }

      setNewUserModal(!newUserModal) // Modal Responsavel por exibir o componente de criação de usuário
   }

   // -- Função responsável por exibir o componente de edição de usuário
   const handleManagerUser = () => {
      if(
         aboutMeModal || // Infos about me
         optionsSystem || // Modal para Funções Administrativas
         invoicingModal || // Modal das vendas do dia
         findProductsModal || // Modal para Produrar um Produto
         newUserModal || // Modal Responsavel por exibir o componente de criação de usuário
         newProductModal || // Modal responsavel por exibir o omponente de criação de um novo produto
         managerProductsModal || // Modal responsável por Listar/Editar os Produtos
         confirmPaymentModal ||  // Modal responsável por exibir o componente de Confirmação de Pagamento
         addProduct ||  // Modal responsavel por mostrar os produtos e seleciona-los para adicionar no carrinho
         historicSaleModal || // Modal responsável por mostrar as vendas do dia
         referencesModal || // Modal responsável por exibir o Modal com as Referências
         closeSystem // Modal responsavel por mostrar o Fechamento de Caixa
      ) {
         setAboutMeModal(false)
         setOptionsSystem(false)
         setInvoicingModal(false)
         setFindProductsModal(false)
         setNewUserModal(false) 
         setNewProductModal(false)
         setManagerProductsModal(false)
         setConfirmPaymentModal(false)
         setAddProduct(false)
         setHistoricSaleModal(false)
         setReferencesModal(false)
         setCloseSystem(false)
      }

      setManagerUsersModal(!managerUsersModal) // Modal responsavel por Listar/Editar os Usuários
   }

   // -- Função responsável por exibir o componente de criação de produto
   const handleNewProduct = () => {
      if(
         aboutMeModal || // Infos about me
         optionsSystem || // Modal para Funções Administrativas
         invoicingModal || // Modal das vendas do dia
         findProductsModal || // Modal para Produrar um Produto
         newUserModal || // Modal Responsavel por exibir o componente de criação de usuário
         managerUsersModal || // Modal responsavel por Listar/Editar os Usuários
         managerProductsModal || // Modal responsável por Listar/Editar os Produtos
         confirmPaymentModal ||  // Modal responsável por exibir o componente de Confirmação de Pagamento
         addProduct ||  // Modal responsavel por mostrar os produtos e seleciona-los para adicionar no carrinho
         historicSaleModal || // Modal responsável por mostrar as vendas do dia
         referencesModal || // Modal responsável por exibir o Modal com as Referências
         closeSystem // Modal responsavel por mostrar o Fechamento de Caixa
      ) {
         setAboutMeModal(false)
         setOptionsSystem(false)
         setInvoicingModal(false)
         setFindProductsModal(false)
         setNewUserModal(false) 
         setManagerUsersModal(false) 
         setManagerProductsModal(false)
         setConfirmPaymentModal(false)
         setAddProduct(false)
         setHistoricSaleModal(false)
         setReferencesModal(false)
         setCloseSystem(false)
      }

      setNewProductModal(!newProductModal) // Modal responsavel por exibir o omponente de criação de um novo produto
   }

   // -- Função responsável por exibir o componente de edição de produto
   const handleManagerProduct = () => {
      if(
         aboutMeModal || // Infos about me
         optionsSystem || // Modal para Funções Administrativas
         invoicingModal || // Modal das vendas do dia
         findProductsModal || // Modal para Produrar um Produto
         newUserModal || // Modal Responsavel por exibir o componente de criação de usuário
         managerUsersModal || // Modal responsavel por Listar/Editar os Usuários
         newProductModal || // Modal responsavel por exibir o omponente de criação de um novo produto
         confirmPaymentModal ||  // Modal responsável por exibir o componente de Confirmação de Pagamento
         addProduct ||  // Modal responsavel por mostrar os produtos e seleciona-los para adicionar no carrinho
         historicSaleModal || // Modal responsável por mostrar as vendas do dia
         referencesModal || // Modal responsável por exibir o Modal com as Referências
         closeSystem // Modal responsavel por mostrar o Fechamento de Caixa
      ) {
         setAboutMeModal(false)
         setOptionsSystem(false)
         setInvoicingModal(false)
         setFindProductsModal(false)
         setNewUserModal(false) 
         setManagerUsersModal(false) 
         setNewProductModal(false)
         setConfirmPaymentModal(false)
         setAddProduct(false)
         setHistoricSaleModal(false)
         setReferencesModal(false)
         setCloseSystem(false)
      }

      setManagerProductsModal(!managerProductsModal) // Modal responsável por Listar/Editar os Produtos
   }

   // -- Função responsável por armazenar os itens no array do carrinho de compras e exibir o modal os itens no carrinho
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

      console.log(cartList)
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

   // -- Função responsável por mostrar o Modal do Historico de vendas
   const handleHistoricModal = async() => { // F2
      if(open) {
         await axios.get(`${server}/SaleDayList`)
            .then(res => {
               console.log(res.data.result)
               setHistoricSale(res.data.result)
            })
            .catch(err => console.log(err))
   
            if(
               aboutMeModal || // Infos about me
               optionsSystem || // Modal para Funções Administrativas
               invoicingModal || // Modal das vendas do dia
               findProductsModal || // Modal para Produrar um Produto
               newUserModal || // Modal Responsavel por exibir o componente de criação de usuário
               managerUsersModal || // Modal responsavel por Listar/Editar os Usuários
               newProductModal || // Modal responsavel por exibir o omponente de criação de um novo produto
               managerProductsModal || // Modal responsável por Listar/Editar os Produtos
               confirmPaymentModal ||  // Modal responsável por exibir o componente de Confirmação de Pagamento
               addProduct ||  // Modal responsavel por mostrar os produtos e seleciona-los para adicionar no carrinho
               referencesModal || // Modal responsável por exibir o Modal com as Referências
               closeSystem // Modal responsavel por mostrar o Fechamento de Caixa
            ) {
               setAboutMeModal(false)
               setOptionsSystem(false)
               setInvoicingModal(false)
               setFindProductsModal(false)
               setNewUserModal(false) 
               setManagerUsersModal(false) 
               setNewProductModal(false)
               setManagerProductsModal(false)
               setConfirmPaymentModal(false)
               setAddProduct(false)
               setReferencesModal(false)
               setCloseSystem(false)
            }
      
         setHistoricSaleModal(!historicSaleModal) // Modal responsável por mostrar as vendas do dia
      } else {
         alert('Abra o caixa camarada.')
      }
   }

   // -- Função responsável por mostrar o Modal da confirmação de vendas
   const handleConfirmPayment = () => { // F4
      if (open) {
         let total = cartList.reduce(
            (sum, item) => sum + parseFloat(item.pdt_price), 0
         ).toFixed(2)

         if (total < '0.25') {
            alert('Carrinho vazio.')
            setConfirmPaymentModal(false)
         } else {

            if(
               aboutMeModal || // Infos about me
               optionsSystem || // Modal para Funções Administrativas
               invoicingModal || // Modal das vendas do dia
               findProductsModal || // Modal para Produrar um Produto
               newUserModal || // Modal Responsavel por exibir o componente de criação de usuário
               managerUsersModal || // Modal responsavel por Listar/Editar os Usuários
               newProductModal || // Modal responsavel por exibir o omponente de criação de um novo produto
               managerProductsModal || // Modal responsável por Listar/Editar os Produtos
               addProduct ||  // Modal responsavel por mostrar os produtos e seleciona-los para adicionar no carrinho
               historicSaleModal || // Modal responsável por mostrar as vendas do dia
               referencesModal || // Modal responsável por exibir o Modal com as Referências
               closeSystem // Modal responsavel por mostrar o Fechamento de Caixa
            ) {
               setAboutMeModal(false)
               setOptionsSystem(false)
               setInvoicingModal(false)
               setFindProductsModal(false)
               setNewUserModal(false) 
               setManagerUsersModal(false) 
               setNewProductModal(false)
               setManagerProductsModal(false)
               setAddProduct(false)
               setHistoricSaleModal(false)
               setReferencesModal(false)
               setCloseSystem(false)
            }

            setConfirmPaymentModal(!confirmPaymentModal) // Modal responsável por exibir o componente de Confirmação de Pagamento

            if(cartList.length <= 0) {
               setModalSelected(!modalSelected)
            }
         }
      } else {
         alert('Abra o caixa camarada.')
      }
   }

   // -- Função responsável por limpar o carrinho de compras
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

   // -- Função responsável por mostrar o Modal de Referências 
   const handleReferencesModal = () => {
      if(
         aboutMeModal || // Infos about me
         optionsSystem || // Modal para Funções Administrativas
         invoicingModal || // Modal das vendas do dia
         findProductsModal || // Modal para Produrar um Produto
         newUserModal || // Modal Responsavel por exibir o componente de criação de usuário
         managerUsersModal || // Modal responsavel por Listar/Editar os Usuários
         newProductModal || // Modal responsavel por exibir o omponente de criação de um novo produto
         managerProductsModal || // Modal responsável por Listar/Editar os Produtos
         confirmPaymentModal || // Modal responsável por exibir o componente de Confirmação de Pagamento
         addProduct ||  // Modal responsavel por mostrar os produtos e seleciona-los para adicionar no carrinho
         historicSaleModal || // Modal responsável por mostrar as vendas do dia
         closeSystem // Modal responsavel por mostrar o Fechamento de Caixa
      ) {
         setAboutMeModal(false)
         setOptionsSystem(false)
         setInvoicingModal(false)
         setFindProductsModal(false)
         setNewUserModal(false) 
         setManagerUsersModal(false) 
         setNewProductModal(false)
         setManagerProductsModal(false)
         setConfirmPaymentModal(false)
         setAddProduct(false)
         setHistoricSaleModal(false)
         setCloseSystem(false)
      }

      setReferencesModal(!referencesModal) // Modal responsável por exibir o Modal com as Reerências
   }

   return (
      <main className="containerSystem flex p-3">
         {closeSystem ?? ( // Fechamento de Caixa
            <div className="infosSystemClose" id="infosSystemClose">
               <Closing close={handleCloseCash} />
            </div>
         )}

         <section className="sectionSystem">
            <Header 
               handleAboutMeModal={ handleAboutMeModal } 
               startJob={ startJob } 
               handleOptionSystem={ handleOptionSystem } 
               handleCloseCash={ handleCloseCash }  
               handleCloseSystem={ handleCloseSystem }
               open={ open } 
               userInfos={ userInfos } />

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
                     { 
                        aboutMeModal &&
                           <AboutMe close={ handleAboutMeModal } />
                     }

                     { 
                        optionsSystem &&
                           <ManagerSystem 
                              handleOptionSystem = { handleOptionSystem } 
                              handleNewUser = { handleNewUser } 
                              handleManagerUser = { handleManagerUser }
                              handleNewProduct = { handleNewProduct }
                              handleManagerProduct = { handleManagerProduct }
                           />
                     }

                     {
                        newUserModal &&
                           <RegisterUser close={() => setNewUserModal(false)} /> 
                     }

                     {
                        managerUsersModal &&
                           <FindUsers listUsers={users} close={() => setManagerUsersModal(false)} /> 
                     }

                     {
                        newProductModal &&
                           <RegisterProduct close={() => setNewProductModal(false)} />
                     }

                     {
                        managerProductsModal &&
                           <FindProducts listProducts={products} close={() => setManagerProductsModal(false)} />
                     }

                     {
                        historicSaleModal &&
                           <Sales listSales={ historicSale } valuesSales={ valuesSalesToday } close={ () =>  setHistoricSaleModal(!historicSaleModal) } />
                           // listSales => Recebe a lista de vendas do historicSale via component
                           // valuesSales => Pega os valores de sales e injeta em valuesSalesDay via component
                     }

                     {
                        confirmPaymentModal &&
                           <ConfirmPayment close={handleConfirmPayment} /> 
                     }

                     {
                        addProduct && 
                           <AddProducts listProducts={ products } close={ handleAddProductModal } cartAddItem={ addItemOnCart } />
                     }
                     
                     {/* Modais depois do cartProductsModal serão exibidos na direita dele */}
                     {
                        cartProductsModal ? <CartList listProducts={ cartItems } /> :
                        <span id="Texugo">
                           <MessageTexugo msg="Carrinho vazio, meu Chapa." tw="100" th="100" className="mb-2 flex text-warning" />
                        </span>
                     }

                     {
                        referencesModal &&
                           <References close={ handleReferencesModal } />
                     }

                     {
                        closeSystem 
                           && <Closing close={ handleCloseCash } userInfos = { userInfos } /> 
                     }

                  </>
               }
            </div>

            <FooterSystem 
               userInfos = { userInfos }
               handleHistoricModal = { handleHistoricModal }
               handleConfirmPayment = { handleConfirmPayment }
               handleAddProductModal = {  handleAddProductModal }
               handleClearCartList = { handleClearCartList }
               handleReferencesModal={ handleReferencesModal }
               onKeyDown = { handleKeyDown }
            />
         </section>
      </main>
   )
}