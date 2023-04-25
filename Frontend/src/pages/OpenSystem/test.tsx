import { useState } from "react"

export const Text = () => {
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

   const [historicSaleModal, setHistoricSaleModal] = useState(false)

   const [closeSystem, setCloseSystem] = useState(false) // Modal responsavel por mostrar o Fechamento de Caixa

   const ts = () => {
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
   }
   return(
      <h1>a</h1>
   )
}