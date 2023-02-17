import SackDollar from '../../assets/Icons/SackDollar'
import CashRegister from '../../assets/Icons/CashRegister'
import MoneyBillWave from '../../assets/Icons/MoneyBillWave'
import MoneyCheckDollar from '../../assets/Icons/MoneyCheckDollar'
import Pix from '../../assets/Icons/Pix'
import PiggyBank from '../../assets/Icons/PiggyBank'
import CreditCard from '../../assets/Icons/CreditCard'
import DollarSign from '../../assets/Icons/DollarSign'
import ArrowLeftLong from '../../assets/Icons/ArrowLeftLong'
import CircleCheck from '../../assets/Icons/CircleCheck'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import XMark from '../../assets/Icons/XMark'
import { CloseType } from '../../types/CloseType'

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

const closeFormDay = () => {
   const close = document.querySelector('#closingFormDay') as HTMLDivElement
   // console.log(close)
   // close.style.display = 'none'
   // close.classList.toggle('none')

   close.style.display = 'flex' ? close.style.display = 'none' : close.style.display = 'flex'
}

export default function Closing({ close }: CloseType) {
   const navigate = useNavigate()

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

   return (
      <main className="container flex pr-3" id='closingFormDay'>
         <div className="forms">

            <form action='/' className="closingDayForm w-100 h-100 f column sbt">
               <h4 className="f sbt">

                  <div className="flex text-center">
                     <p className='pg1 flex'>Fechamento de Caixa</p>
                     <SackDollar w='24' h='24' fill='var(--bs-info)' className='ml-1' />
                  </div>

                  <div id='closeElementFormDay'>
                     <XMark w='24' h='24'
                        className=''
                        onClick={ close }
                     />
                  </div>
               </h4>

               <div className="inputForm f aic sbt bb-info"> {/* Abertura */}
                  <p className='inputTF'>Abertura</p>

                  <div className="openingValue borderForm flex inputValue">
                     <CashRegister w='24' h='24' fill='var(--bs-primary)' className='mr-1' />
                     <p className='inputTF text-primary'>
                        {/* 0,00 */}
                        {/* {opening.toFixed(2)} */}
                        {/* { openCashValue } */}
                     </p>
                  </div>
               </div>

               <div className="inputForm f aic sbt bb-info">  {/* Encerramento */}
                  <p className='inputTF'>Encerramento</p>

                  <div className="moneyOfTheDay inputValue borderForm flex">
                     <MoneyBillWave w='24' h='24' fill='var(--bs-success)' className='mr-1' />
                     <p className='inputTF text-success'>
                        {/* 0,00 */}
                        {money.toFixed(2)}
                     </p>
                  </div>
               </div>

               <div className="inputForm f aic sbt bb-info">  {/* Vendas - Encerramento - Abertura */}
                  <p className='inputTF'>Vendas</p>

                  <div className="amountMoneyOfTheDay inputValue borderForm flex">
                     <span className='inputTF flex'>
                        <MoneyCheckDollar w='28' h='28' fill='var(--violet-nk)' className='mr-1' />
                        <span className="mr-1">=</span>
                        <MoneyBillWave w='24' h='24' fill='var(--bs-success)' className='mr-1' />
                        <span className="mr-1">-</span>
                        <CashRegister w='24' h='24' fill='var(--bs-primary)' className='mr-1' />
                     </span>

                     <p className='inputTF text-violet-nk'>
                        {/* 0,00 */}
                        {amountMoney.toFixed(2)}
                     </p>
                  </div>
               </div>

               <div className="inputForm f aic sbt bb-info">  {/* Pix */}
                  <p className='inputTF'>Pix</p>

                  <div className="valueOfTheDay borderForm flex">
                     <Pix w='24' h='24' fill='var(--pix)' className='mr-1' />
                     <p className='inputTF text-pix'>
                        {/* 0,00 */}
                        {pix.toFixed(2)}
                     </p>
                  </div>
               </div>

               <div className="inputForm f aic sbt bb-info">  {/* Cartões - amountCards */}
                  <p className='inputTF'>Cartões</p>

                  <div className="valueOfTheDay borderForm flex">
                     <span className='inputTF flex'>
                        <CreditCard w='24' h='24' fill='var(--blue-mp)' className='mr-1' />
                        <span className="mr-1">+</span>
                        <CreditCard w='24' h='24' fill='var(--yellow-ml)' className='mr-1' />
                     </span>
                     <p className='inputTF text-blue-mp'>
                        {/* 0,00 */}
                        {amountCards.toFixed(2)}
                     </p>
                  </div>
               </div>

               <div className="inputForm f aic sbt bb-info">  {/* Conta - amountBank */}
                  <p className='inputTF'>Conta</p>

                  <div className="valueOfTheDay borderForm flex">
                     <span className='inputTF flex'>
                        <PiggyBank w='24' h='24' fill='var(--orange-in)' className='mr-1' />
                        <span className="mr-1">=</span>
                        <Pix w='24' h='24' fill='var(--pix)' className='mr-1' />
                        <span className="mr-1">+</span>
                        <CreditCard w='24' h='24' fill='var(--blue-mp)' className='mr-1' />
                        <span className="mr-1">+</span>
                        <CreditCard w='24' h='24' fill='var(--yellow-ml)' className='mr-1' />
                     </span>
                     <p className='inputTF text-orange-in'>
                        {/* 0,00 */}
                        {amountBank.toFixed(2)}
                     </p>
                  </div>
               </div>

               <div className="inputForm f aic sbt bb-info">  {/* Geral - amountValue */}
                  <p className='inputTF'>Total</p>

                  <div className="valueOfTheDay borderForm flex">
                     <span className='inputTF flex'>
                        <DollarSign w='24' h='24' fill='var(--dark-green)' className='' />
                        <span className="mr-1">=</span>
                        <MoneyCheckDollar w='28' h='28' fill='var(--violet-nk)' className='mr-1' />
                        <span className="mr-1">+</span>
                        <PiggyBank w='24' h='24' fill='var(--orange-in)' className='mr-1' />
                     </span>
                     <p className='inputTF text-dark-green'>
                        {/* 0,00 */}
                        {amountValue.toFixed(2)}
                     </p>
                  </div>
               </div>

               <span className="flex sbt mt-1">
                  <Link to='/invoicing' className="btn btn-warning mr-1 w-50" >
                     Voltar(F7)
                     <ArrowLeftLong w='24' h='24' fill='var(--bs-dark)' className='ml-1' />
                  </Link>

                  <Link to='/' className="btn btn-success ml-1  w-50">
                     Fechar(F8)
                     <CircleCheck w='24' h='24' fill='var(--text)' className='ml-1' />
                  </Link>
               </span>
            </form>
         </div>
      </main>
   )
}