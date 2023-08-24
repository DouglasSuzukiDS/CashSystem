/* eslint-disable no-unused-expressions */
import { KeyboardEvent, useEffect } from "react";

import { ActionsType } from "../../types/ActionsType";

import { CashRegister } from "../../assets/Icons/CashRegister";
import { CircleCheck } from "../../assets/Icons/CircleCheck";
import { SackDollar } from "../../assets/Icons/SackDollar";
import { XMark } from "../../assets/Icons/XMark";

export const OpenCash = ({ close, onClick }: ActionsType) => {
   useEffect(() => {
      //localStorage.removeItem('openCashValue')
      localStorage.getItem('openCashValue')
   }, [])

   const handleOpenCashModal = () => {
      // Modal OpenCash
      let modal = document.querySelector('#openCashModal') as HTMLElement
      modal.classList.remove('flex')
      modal.classList.add('none')
   }

   const openCashValue = () => {
      let openingCashInput = document.querySelector('#openingCash') as HTMLInputElement
      
      if(openingCashInput.value !== '') {
         let openingCash = parseFloat(openingCashInput.value).toFixed(2)

         //const alertMsgCash = alert('Insira o valor correto')
   
         const createValueLocalStorage = () => {
            // Create value on Local Storage
            localStorage.removeItem('openCashValue')
            localStorage.setItem('openCashValue', openingCash)

            const hour: number = new Date().getHours()
            const minutes: number = new Date().getMinutes()
            const seconds: number = new Date().getSeconds()

            localStorage.setItem('openHour', `${hour}-${minutes}-${seconds}`)

            handleOpenCashModal()
   
            // Status Cash System
            let statusSystemH4 = document.querySelector('#statusSystemH4') as HTMLHeadingElement
            statusSystemH4.classList.remove('text-danger')
            statusSystemH4.classList.add('text-success')
            statusSystemH4.innerHTML = 'Caixa Aberto'
         }
   
         //eslint-disable-next-line no-restricted-globals
         if (confirm(`Confirmar Valor: ${openingCash}`)) {
            createValueLocalStorage()
         } 
   
         window.location.href = 'http://localhost:3000/OpenSystem'
      } else {
         alert('Por obséquio, informa o valor para abertura do caixa, jaguara.')
      }

   }

   const handleOpenCashWithEnter = (e: KeyboardEvent<HTMLInputElement>) => {
      let openingCashInput = document.querySelector('#openingCash') as HTMLInputElement

      if(openingCashInput.value !== '') {
         setTimeout(() => openCashValue(), 1500)
         
      } else {
         alert('Por obséquio, informe um valor para abertura do caixa.')
      } 
   }

   return (
      <article className="flex" id='openCashModal'>
         <div className="formsOpen">
            <form action='/' className="formOpenCash w-100 h-100 f column sbt" id='formOpenCash'>
               <h4 className="f sbt pb-2">

                  <div className="flex text-center">
                     <h4 className='flex'>Abertura de Caixa</h4>
                     <SackDollar w='24' h='24' fill='var(--bs-info)' className='ml-1' />
                  </div>

                  <div id='closeOpenCash'>
                     <XMark w='24' h='24'
                        className=''
                        // onClick={ handleOpenCashModal }
                        onClick={ close }
                     />
                  </div>
               </h4>

               <div className="inputForm f aic sbt bb-info p-1"> {/* Abertura */}
                  <p className='inputTF'>Abertura</p>

                  <div className="openingValue borderForm flex inputValue">
                     <CashRegister w='24' h='24' fill='var(--bs-primary)' className='mr-1' />
                     <p className='inputTF text-primary'>
                        <input type="text"
                           className='text-primary pg3 text-center'
                           id="openingCash" placeholder="0,00" 
                            />
                     </p>
                  </div>
               </div>

               <div className="flex btn btn-success mt-3" onClick={ openCashValue }>
                  Confirmar
                  <CircleCheck w='24' h='24' fill='var(--text)' className='ml-1' />
               </div>

            </form>
         </div>
      </article>
   )
}