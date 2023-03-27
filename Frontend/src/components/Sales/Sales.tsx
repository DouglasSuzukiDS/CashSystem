import { useEffect, useState } from "react"
import { CreditCard } from "../../assets/Icons/CreditCard"
import { ListCheck } from "../../assets/Icons/ListCheck"
import { MoneyBillWave } from "../../assets/Icons/MoneyBillWave"
import { Pix } from "../../assets/Icons/Pix"
import { XMark } from "../../assets/Icons/XMark"
import { ActionsType } from "../../types/ActionsType"
import { SalesType } from "../../types/SalesType"

export const Sales = ({ listSales, close }: ActionsType) => {
   useEffect(() => {
      listSales ? setSales(listSales) : setSales([])
   }, [])

   const [sales, setSales] = useState<SalesType[]>([])

   let paymentMoney =  sales.filter(el => (
      el.methodSale === 'Dinheiro'
   )).reduce(
      (sum, item) => sum + parseFloat(item.priceSale as string), 0
   ).toFixed(2)

   let paymentPix =  sales.filter(el => (
      el.methodSale === 'Pix'
   )).reduce(
      (sum, item) => sum + parseFloat(item.priceSale as string), 0
   ).toFixed(2)

   let paymentDebit =  sales.filter(el => (
      el.methodSale === 'Cartão de Débito'
   )).reduce(
      (sum, item) => sum + parseFloat(item.priceSale as string), 0
   ).toFixed(2)

   let paymentCredit =  sales.filter(el => (
      el.methodSale === 'Cartão de Crédito'
   )).reduce(
      (sum, item) => sum + parseFloat(item.priceSale as string), 0
   ).toFixed(2)

   let moneyPix = (parseFloat(paymentMoney) +  parseFloat(paymentPix)).toFixed(2)
   let debitCredit = (parseFloat(paymentDebit) + parseFloat(paymentCredit)).toFixed(2)

   console.log(parseFloat(paymentMoney + paymentPix))

   return(
      <div className="salesContainer flex sbt column sbt mr-2">

         <h4 className="flex sbt w-100">
            <div className="historic flex text-info w-100">
               <p>Historico de Vendas</p>
               <ListCheck w='24' h='24' fill="var(--bs-info)" className='ml-1' />
            </div>

            <div className="salesClose flex">
               <XMark w='24' h='24' className='' onClick={ close } />
            </div>
         </h4>

         <div className="salesData mt-3">
            <table className="salesDataTable text-center pg5 bold">
               <thead className="text-color">
                  <tr>
                     <td>Venda</td>
                     <td>Valor</td>
                     <td>Pagamento</td>
                     <td>Vendedor</td>
                     <td>Data</td>
                     <td>Horário</td>
                  </tr>
               </thead>

               <tbody>
   
                  { 
                     sales.map((el) => (
                        <tr key={ el.idSale }>
                           <td>{ el.idSale }</td>
                           <td>R$ { el.priceSale }</td>
                           <td>{ el.methodSale }</td>
                           <td>{ el.sellerSale }</td>
                           <td>{ (el.registrationSale)?.split(' ')[0] }</td>
                           <td>{ (el.registrationSale)?.split(' ')[1] }</td>
                        </tr>
                     ))
                  }

               </tbody>

            </table>

         </div>

         <div className="valuesSale flex sbt mt-2 w-100">
            <span className="f column border w-100 sbt aifs">
               <p className="moneySale inputTF borderFormMoney flex text-success mb-1">
                  <MoneyBillWave w='24' h='24' fill='var(--bs-success)' className='mr-1' />
                  { paymentMoney }
               </p>

               <p className="pixSale inputTF borderFormPix flex text-pix mb-1">
                  <Pix w='24' h='24' fill='var(--pix)' className='mr-1' />
                  { paymentPix }
               </p>

               <p className="moneyPixSale inputTF borderFormMoneyPix flex text-danger">
                  <MoneyBillWave w='24' h='24' fill='var(--bs-success)' className='mr-1' />
                  <span className="mr-1">+</span>
                  <Pix w='24' h='24' fill='var(--pix)' className='mr-1' />
                  { moneyPix }
               </p>
            </span>

            <span className="f column border w-100 sbt aife">
               <p className="debitSale inputTF borderFormDebit flex text-blue-mp mb-1">
                  <CreditCard w='24' h='24' fill='var(--blue-mp)' className='mr-1' />
                  { paymentDebit}
               </p>

               <p className="creditSale inputTF borderFormCredit flex text-yellow-ml mb-1">
                  <CreditCard w='24' h='24' fill='var(--yellow-ml)' className='mr-1' />
                  { paymentCredit}
               </p>

               <p className="debitCreditSale inputTF borderFormCredit flex text-danger">
                  <CreditCard w='24' h='24' fill='var(--blue-mp)' className='mr-1' />
                  <span className="mr-1">+</span>
                  <CreditCard w='24' h='24' fill='var(--yellow-ml)' className='mr-1' />

                  { debitCredit }
               </p>
            </span>
         </div>
      </div>
   )
}