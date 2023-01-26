/* eslint-disable no-unused-expressions */
import { HTMLAttributes, useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import CashRegister from "../../assets/Icons/CashRegister";
import CircleCheck from "../../assets/Icons/CircleCheck";
import SackDollar from "../../assets/Icons/SackDollar";
import XMark from "../../assets/Icons/XMark";
import { CloseType } from "../../types/CloseType";

export default function OpenCash({ close }: CloseType) {
   useEffect(() => {
      //localStorage.removeItem('openCashValue')
      //localStorage.getItem('openCashValue')
      //localStorage
   }, [])

   const cashStatus = () => {
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
      
      // let notAllowedClass =[...document.querySelectorAll('.notAllowed')]
      // notAllowedClass[0].classList.remove('notAllowed')
      // notAllowedClass[0].style.cursos = 'pointer'
   }

   /*if(localStorage.getItem('openCashValue') !== '') {
   //    let statusSystemH4 = document.querySelector('#statusSystemH4')
   //    statusSystemH4.classList.remove('text-danger')
   //    statusSystemH4.classList.add('text-success')
   //    statusSystemH4.innerHTML = 'Caixa Aberto'

   //    // Button Status Cash
   //   let btn_openCash = document.querySelector('#btn_openCash')
   //   let btn_closeCash = document.querySelector('#btn_closeCash')


   //   btn_openCash.style.display = 'none'
   //   btn_closeCash.style.display = 'flex'
     
   //   let notAllowedClass =[...document.querySelectorAll('.notAllowed')]
   //   notAllowedClass[0].classList.remove('notAllowed')
   //   notAllowedClass[0].style.cursos = 'pointer'

     cashStatus()
   } else {

   }*/

   const navigate = useNavigate()
   
   const openCashValue = () => {
      // let openingCash = parseFloat(document.querySelector('#openingCash').value).toFixed(2)
      let openingCashInput = document.querySelector('#openingCash') as HTMLInputElement
      let openingCash = parseFloat(openingCashInput.value).toFixed(2)

      //const alertMsgCash = alert('Insira o valor correto')

      function lc(){
         // Create value on Local Storage
         // localStorage.removeItem('openCashValue')
         localStorage.removeItem('openCashValue')
         localStorage.setItem('openCashValue', openingCash)

         //navigate('/')

         //cashStatus()

         // Modal OpenCash
         let modal = document.querySelector('#openCashModal') as HTMLElement
         modal.classList.remove('flex')
         modal.classList.add('none')
         // console.log(modal)

         // Status Cash System
         let statusSystemH4 = document.querySelector('#statusSystemH4') as HTMLHeadingElement
         statusSystemH4.classList.remove('text-danger')
         statusSystemH4.classList.add('text-success')
         statusSystemH4.innerHTML = 'Caixa Aberto'

        // Button Status Cash
        let btn_openCash = document.querySelector('#btn_openCash') as HTMLButtonElement
        let btn_closeCash = document.querySelector('#btn_closeCash') as HTMLButtonElement

      //   btn_openCash.classList.add('none')
      //   btn_closeCash.classList.remove('none')
        btn_openCash.style.display = 'none'
        btn_closeCash.style.display = 'flex'
        
      //   let notAllowedClass = [...document.querySelectorAll('.notAllowed')] as HTMLAttributes
        let notAllowedClass = document.querySelectorAll<HTMLElement>('.notAllowed')
        notAllowedClass[0].classList.remove('notAllowed') 
        notAllowedClass[0].style.cursor = 'pointer'
      }

      //eslint-disable-next-line no-restricted-globals
      confirm(`Confirmar Valor: ${openingCash}`) ?
       lc() : alert('5555')
   }

   return (
      <main className="flex" id='openCashModal'>
         <div className="formsOpen">

            <form action='/' className="formOpenCash w-100 h-100 f column sbt" id='formOpenCash'>
               <h4 className="f sbt pb-2">

                  <div className="flex text-center">
                     <h4 className='flex'>Abertura de Caixa</h4>
                     <SackDollar w='24' h='24' fill='var(--bs-info)' className='ml-1' />
                  </div>

                  {/* <div id='closeOpenCash' onClick={props.close}> */}
                  <div id='closeOpenCash'>
                     <XMark w='24' h='24'
                        className=''
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
                           id="openingCash" placeholder="0,00"/>
                        {/* {opening.toFixed(2)} */}
                     </p>
                  </div>
               </div>

               <div className="flex btn btn-success mt-3" onClick={openCashValue}>
                     Confirmar
                     <CircleCheck w='24' h='24' fill='var(--text)' className='ml-1' />
               </div>

            </form>
         </div>
      </main>
   )
}