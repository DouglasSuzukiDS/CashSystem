import { useEffect, useState } from "react"
import { ListCheck } from "../../assets/Icons/ListCheck"
import { XMark } from "../../assets/Icons/XMark"
import { ActionsType } from "../../types/ActionsType"
import { SalesType } from "../../types/SalesType"

export const Sales = ({ listSales, close }: ActionsType) => {
   useEffect(() => {
      listSales ? setSales(listSales) : setSales([])
   }, [])

   const [sales, setSales] = useState<SalesType[]>([])

   return(
      <div className="salesContainer flex column sbt mr-2">

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

         <div className="valuesSale">
            <div className="moneySale">

            </div>

            <div className="pixSale">

            </div>


            <div className="debitSale">

            </div>

            
            <div className="creditSale">
               
            </div>
         </div>
      </div>
   )
}