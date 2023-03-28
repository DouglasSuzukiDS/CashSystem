import { Download } from "../../assets/Icons/Download";
import { PenToSquare } from "../../assets/Icons/PenToSquare";
import { Registered } from "../../assets/Icons/Registered";
import { UserPen } from "../../assets/Icons/UserPen";
import { UserPlus } from "../../assets/Icons/UserPlus";
import { ActionsType } from "../../types/ActionsType";
import { IconsProps } from "../../types/IconsProps";

export const ManagerSystem = ({ handleOptionSystem, handleNewUser, handleManagerUser, handleNewProduct, handleManagerProduct }: ActionsType) => {

   // Funções de Backup
   const handleBackup = async () => {

   }

   const handleBackupSales = async () => {

   }

   const handleBackupUsers = async () => {

   }

   const handleBackupProducts = async () => {

   }

   return (
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
               onClick={handleManagerProduct}>
               Editar Produto
               <PenToSquare w="20" h="20" fill="var(--bs-warning)" className="ml-1" />
            </li>

            <li className="flex"
               onClick={handleBackup}>
               Backup Geral
               <Download w="20" h="20" fill="var(--btn)" className="ml-1" />
            </li>

            <li className="flex"
               onClick={handleBackupSales}>
               BKP de Vendas
               <Download w="20" h="20" fill="var(--btn)" className="ml-1" />
            </li>

            <li className="flex"
               onClick={handleBackupUsers}>
               BKP de Usuários
               <Download w="20" h="20" fill="var(--btn)" className="ml-1" />
            </li>

            <li className="flex"
               onClick={handleBackupProducts}>
               BKP de Produtos
               <Download w="20" h="20" fill="var(--btn)" className="ml-1" />
            </li>
         </ul>
      </section>
   )
}