import { ActionsType } from "../../types/ActionsType";

export const ManagerSystem = ({ close, handleManager , id, listUsers, listProducts }: ActionsType) => {
   const handleNewUser = () => {
      return true
   }
   
   const handleShowEditUserModal = () => {
      return true
   }

   const handleNewProduct = () => {
      return true
   }

   const handleShowEditProductModal = () => {
      return true
   }

   return (
      <section className="managerSystem flex" onMouseLeave={ close }>
         <ul className="flex column text-dark bold">
            <li onClick={ handleNewUser }>Criar novo Usuário</li>
            <li onClick={ handleShowEditUserModal }>Editar Usuário</li>
            <li onClick={ handleNewProduct }>Criar novo Produto</li>
            <li onClick={ handleShowEditProductModal }>Editar Produtos</li>
         </ul>
      </section>
   )
}