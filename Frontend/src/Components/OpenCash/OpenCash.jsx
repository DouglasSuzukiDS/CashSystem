/* eslint-disable no-unused-expressions */
import { redirect, useNavigate } from "react-router-dom";
import CashRegister from "../../assets/Icons/CashRegister";
import CircleCheck from "../../assets/Icons/CircleCheck";
import SackDollar from "../../assets/Icons/SackDollar";
import XMark from "../../assets/Icons/XMark";

export default function OpenCash(props) {
   // localStorage.removeItem('openCashValue')

   const navigate = useNavigate()
   
   const openCashValue = () => {
      let openingCash = parseFloat(document.querySelector('#openingCash').value).toFixed(2)

      //const alertMsgCash = alert('Insira o valor correto')

      function lc(){
         // localStorage.removeItem('openCashValue')
         localStorage.removeItem('openCashValue')
         localStorage.setItem('openCashValue', openingCash)
         navigate('/')
         let modal = document.querySelector('#openCashModal')
         modal.classList.remove('flex')
         modal.classList.add('none')
         console.log(modal)
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

                  <div id='closeOpenCash' onClick={props.close}>
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