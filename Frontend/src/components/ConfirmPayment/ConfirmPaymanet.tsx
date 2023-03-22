import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ActionsType } from '../../types/ActionsType'

import { SackDollar } from '../../assets/Icons/SackDollar'
import { CashRegister } from '../../assets/Icons/CashRegister'
import { MoneyBillWave } from '../../assets/Icons/MoneyBillWave'
import { MoneyCheckDollar } from '../../assets/Icons/MoneyCheckDollar'
import { Pix } from '../../assets/Icons/Pix'
import { PiggyBank } from '../../assets/Icons/PiggyBank'
import { CreditCard } from '../../assets/Icons/CreditCard'
import { DollarSign } from '../../assets/Icons/DollarSign'
import { ArrowLeftLong } from '../../assets/Icons/ArrowLeftLong'
import { CircleCheck } from '../../assets/Icons/CircleCheck'
import { XMark } from '../../assets/Icons/XMark'
import { HandHoldingDollar } from '../../assets/Icons/HandHoldingDollar'

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

// window.addEventListener('keydown', (event) => {
//    console.log(event.keyCode)
// })

// const navigate = useNavigate()

const closeFormDay = () => {
   const close = document.querySelector('#paymentForm') as HTMLDivElement
   // console.log(close)
   // close.style.display = 'none'
   // close.classList.toggle('none')

   close.style.display = 'flex' ? close.style.display = 'none' : close.style.display = 'flex'
}

export const ConfirmPayment = ({ close }: ActionsType) => {
/*   const navigate = useNavigate()

   // Values Brute
let opening = 37.80
let money = 258
let pix = 27

let debitCard = 34.50
let creditCard = 13.30

// Tax Card
let taxDebit = ((debitCard * 1.99) / 100).toFixed(2) 
let taxCredit = ((creditCard * 4.74) / 100).toFixed(2)
// console.log(`Taxa Débito: ${taxDebit}`)
// console.log(`Taxa Crédito: ${taxCredit}`)

let debitCardFinal = debitCard - parseInt(taxDebit) // 33,81
let creditCardFinal = creditCard - parseInt(taxCredit) // 12,67
// console.log(`Débito sem a Taxa: ${debitCardFinal}`)
// console.log(`Crédito sem a Taxa: ${creditCardFinal}`)

// Values Final

let openingPix = opening + pix // 285
// console.log(`Din + Pix: ${openingPix}`)

let amountCards = (debitCardFinal + creditCardFinal) //  46,48
// console.log(`Valor Total em Cartões: ${amountCards}`)

let amount = (openingPix + amountCards).toFixed(2) // 331,48
// console.log(`Total: ${amount}`)

// Values Money
let amountMoney = money - opening
let amountBank = pix + amountCards
let amountValue = amountMoney + amountBank

   useEffect(() => {
      window.addEventListener('keydown', (event) => {
         if (event.keyCode === 118) { // F7
            navigate('/invoicing')
         } else if (event.keyCode === 119) { // F8
            navigate('/')
         }
      })
   }, [])

   const closeSystem = async() => {
      await localStorage.removeItem('openCashValue')
      await localStorage.removeItem('AuthToken')
      window.location.href = 'http://localhost:3000'
   }*/

   return (
      <main className="container flex pr-3" id='paymentFormContainer'>
         <div className="forms">

            <form action='/' className="paymentForm w-100 h-100 f column sbt">
               <h4 className="flex sbt">

                  <div className="flex text-center3 w-100">
                     <p className='pg1 flex'>Pagamento</p>
                     <HandHoldingDollar w='24' h='24' fill='var(--bs-info)' className='ml-1' />
                  </div>

                  <div id='closePaymentForm'>
                     <XMark w='24' h='24'
                        className=''
                        onClick={ close }
                     />
                  </div>
               </h4>

               <div className="inputForm flex aic sbt my-1"> {/* Valor da Compra */}
                  <p className='inputTF'>Valor da Compra</p>

                  <div className="purchasePrice borderForm flex inputValue">
                     <CashRegister w='24' h='24' fill='var(--bs-primary)' className='mr-1' />
                     <p className='inputTF text-primary'>
                        120,00
                        {/* {opening.toFixed(2)} */}
                        {/* { openCashValue } */}
                     </p>
                  </div>
               </div>
               <span className='bb-info'></span>

               <div className="mt-1">  {/* Forma de Pagamento */}
                  <p className='inputTF text-center'>Forma de Pagamento</p>

                  <div className='flex column mt-2' id='choosePaymentMethodContainer'>
                     <div className='flex'>
                        <div className="paymentMoney borderFormFix flex mr-1 pointer">
                           <MoneyBillWave w='24' h='24' fill='var(--bs-success)' className='mr-1' />
                           <p className='inputTF text-success'> Dinheiro </p>
                        </div>

                        <div className="PaymentPix borderFormFix flex ml-1 pointer">
                           <Pix w='24' h='24' fill='var(--pix)' className='mr-1' />
                           <p className='inputTF text-pix'> Pix </p>
                        </div>
                     </div>

                     <div className='flex mt-2'>
                        <div className="paymentDebit borderFormFix flex mr-1 pointer">
                           <CreditCard w='24' h='24' fill='var(--blue-mp)' className='mr-1' />
                           <p className='inputTF text-blue-mp'> Débito </p>
                        </div>

                        <div className="PaymentCredit borderFormFix flex ml-1 pointer">
                           <CreditCard w='24' h='24' fill='var(--yellow-ml)' className='mr-1' />
                           <p className='inputTF text-yellow-ml'> Crédito </p>
                        </div>
                     </div>

                  </div>

               </div>
               <span className='bb-info mt-1'></span>

               <span className="flex sbt mt-1">
                  <button className="btn btn-warning mr-1 w-50"  onClick={ close } >
                     Voltar(F7)
                     <ArrowLeftLong w='24' h='24' fill='var(--bs-dark)' className='ml-1' />
                  </button>

                  {/* <button className="btn btn-success ml-1 w-50" onClick={ closeSystem } > */}
                  <button className="btn btn-success ml-1 w-50" >
                     Fechar(F8)
                     <CircleCheck w='24' h='24' fill='var(--text)' className='ml-1' />
                  </button>
               </span>
            </form>
         </div>
      </main>
   )
}