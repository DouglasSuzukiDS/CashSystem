import SackDollar from '../../assets/Icons/SackDollar'
import CashRegister from '../../assets/Icons/CashRegister'
import MoneyBillWave from '../../assets/Icons/MoneyBillWave'
import MoneyCheckDollar from '../../assets/Icons/MoneyCheckDollar'
import Pix from '../../assets/Icons/Pix'
import PiggyBank from '../../assets/Icons/PiggyBank'
import CreditCard from '../../assets/Icons/CreditCard'
import DollarSign from '../../assets/Icons/DollarSign'
import CircleCheck from '../../assets/Icons/CircleCheck'
import { Link } from 'react-router-dom'

// Values Brute
let opening = 37.80
let money = 258
let pix = 27

let debitCard = 34.50 
let creditCard = 13.30 

// Tax Card
let taxDebit = ((debitCard * 1.99) / 100).toFixed(2)
let taxCredit = ((creditCard * 4.74) / 100).toFixed(2)
console.log(`Taxa Débito: ${taxDebit}`)
console.log(`Taxa Crédito: ${taxCredit}`)

let debitCardFinal = debitCard - taxDebit // 33,81
let creditCardFinal = creditCard - taxCredit // 12,67
console.log(`Débito sem a Taxa: ${debitCardFinal}`)
console.log(`Crédito sem a Taxa: ${creditCardFinal}`)

// Values Final

let openingPix = opening + pix // 285
console.log(`Din + Pix: ${openingPix}`)

let amountCards = (debitCardFinal + creditCardFinal) //  46,48
console.log(`Valor Total em Cartões: ${amountCards}`)

let amount = (openingPix + amountCards).toFixed(2) // 331,48
console.log(`Total: ${amount}`)

// Values Money
let amountMoney = money - opening
let amountBank = pix + amountCards
let amountValue = amountMoney + amountBank

export default function Closing() {
   return(
      <main className="container flex">
         <div className="forms">
         <form action='/' className="closingDayForm w-100 h-100 f column sbt">
            <h4 className="flex sar">
               Fechamento de Caixa
               <SackDollar w='24' h='24' fill='var(--bs-info)' className='' />
            </h4>

            <div className="inputForm f aic sbt bb-info"> {/* Abertura */}
               <p className='inputTF'>Abertura</p>

               <div className="openingValue borderForm flex inputValue">
                  <CashRegister w='24' h='24' fill='var(--bs-primary)' className='mr-1' />
                  <p className='inputTF text-primary'>
                     {/* 0,00 */}
                     { opening.toFixed(2) }
                  </p>
               </div>
            </div>

            <div className="inputForm f aic sbt bb-info">  {/* Encerramento */}
               <p className='inputTF'>Encerramento</p>

               <div className="moneyOfTheDay inputValue borderForm flex">
                  <MoneyBillWave w='24' h='24' fill='var(--bs-success)' className='mr-1' />
                  <p className='inputTF text-success'>
                     {/* 0,00 */}
                     { money.toFixed(2) }
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
                     { amountMoney.toFixed(2) }
                  </p>
               </div>
            </div>

            <div className="inputForm f aic sbt bb-info">  {/* Pix */}
               <p className='inputTF'>Pix</p>

               <div className="valueOfTheDay borderForm flex">
                  <Pix w='24' h='24' fill='var(--pix)' className='mr-1' />
                  <p className='inputTF text-pix'>
                     {/* 0,00 */}
                     { pix.toFixed(2) }
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
                     { amountCards.toFixed(2) }
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
                     { amountBank.toFixed(2) }
                  </p>
               </div>
            </div>     

            <div className="inputForm f aic sbt bb-info">  {/* Geral - amountValue */}
               <p className='inputTF'>Total</p>

               <div className="valueOfTheDay borderForm flex">
                  <span className='inputTF flex'>
                     <DollarSign w='24' h='24' fill='var(--dark-blue)' className='' />
                     <span className="mr-1">=</span>
                     <MoneyCheckDollar w='28' h='28' fill='var(--violet-nk)' className='mr-1' />
                     <span className="mr-1">+</span>
                     <PiggyBank w='24' h='24' fill='var(--orange-in)' className='mr-1' /> 
                  </span>
                  <p className='inputTF text-dark-blue'>
                     {/* 0,00 */}
                     { amountValue.toFixed(2) }
                  </p>
               </div>
            </div>

            <Link to='/' className="btn btn-success mt-1" >
               Fechar Caixa
               <CircleCheck w='24' h='24' fill='var(--text)' className='ml-1' />
            </Link>
         </form>
         </div>
      </main>
   )
}