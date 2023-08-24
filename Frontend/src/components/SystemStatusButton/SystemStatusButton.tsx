import { ActionsType } from "../../types/ActionsType"

import { CashRegister } from "../../assets/Icons/CashRegister"

export const SystemSatusButton = ({ close, id, text, color, className, onClick, icon }: ActionsType) => {
   return(
      <button id={ id } className={ className } onClick={ onClick } >
         <>
            { text }
            <CashRegister w='24' h='24' fill='var(--text)' className='ml-1 text-color' />
         </>
      </button>
   )
}