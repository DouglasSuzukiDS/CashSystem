import { useContext } from "react"

import { ActionsType } from "../../types/ActionsType"

import { AuthContext } from "../../context/Auth/AuthContext"

import { HandshakeRussian } from "../../assets/Icons/HandshakeRussian"
import { ListCheck } from "../../assets/Icons/ListCheck"
import { MagnifyingGlass } from "../../assets/Icons/MagnifyingGlass"
import { SackDollar } from "../../assets/Icons/SackDollar"
import { Signature } from "../../assets/Icons/Signature"
import { TrashCan } from "../../assets/Icons/TrashCan"
import { RussianFlag } from "../../assets/Icons/RussianFlag"

export const FooterSystem = ({
   userInfos, handleHistoricModal, handleConfirmPayment, handleAddProductModal,
   handleClearCartList, handleReferencesModal, onKeyDown }: ActionsType) => {

   const { userData, setUserData } = useContext(AuthContext)

   return (
      <footer className="footerSystem flex sbt russianGradient">
         <div className="employeerFooterSystem flex column px-2 py-1 mr-3 russianGradient">
            <p className="pg5 bold text-red-russian">Colaborador</p>

            <p className="pg4 bold italic text-center text-pix flex column" id="employeerName">
               {userInfos?.userName === undefined ? userData.userName : userInfos?.userName}
               <Signature w='24' h='24' fill='var(--white-russian)' />
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

            <button className="btn btn-warning ml-1" onClick={ handleAddProductModal } onKeyDown={ onKeyDown }>
               F9 Pesquisar
               <MagnifyingGlass w='20' h='20' fill='var(--text-dark)' className='ml-1' />
            </button>

            <button className="btn btn-danger ml-1" onClick={ handleClearCartList }>
               F10 Cancelar
               <TrashCan w='20' h='20' fill='var(--text)' className='ml-1' />
            </button>

            <button className="btn btn-primary ml-1" onClick={ handleReferencesModal }>
               Referências
               <HandshakeRussian w='30' h='24' fill='var(--text)' className='mx-1' />
               <RussianFlag w='30' h='24' />
            </button>

         </div>
      </footer>
   )
}