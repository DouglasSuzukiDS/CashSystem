import { useState } from "react"
import { ValuesSalesType } from "../../types/ValuesSalesType"
import { ValeusSalesContext } from "./ValuesSalesContext"

export const ValuesSalesProvider = ({ children }: { children: JSX.Element }) => {
   const [valuesSalesToday, setValuesSalesToday] = useState<ValuesSalesType>({
         openCash: 0, 
         moneySale: 0,
         pixSale: 0,
         debitSale: 0,
         creditSale: 0,
         moneyPix: 0,
         debitCredit: 0
   })
   
   return(
      <ValeusSalesContext.Provider value={{ valuesSalesToday, setValuesSalesToday }}>
         { children }
      </ValeusSalesContext.Provider>
   )
}