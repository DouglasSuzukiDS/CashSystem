import { createContext } from "react"
import { ValuesSalesType } from "../../types/ValuesSalesType"

type ValuesSales = {
   valuesSalesToday: ValuesSalesType,
   setValuesSalesToday: (newState: ValuesSalesType) => void
}

const initialValues = {
   valuesSalesToday: {
      openCash: 0, 
      moneySale: 0,
      pixSale: 0,
      debitSale: 0,
      creditSale: 0,
      moneyPix: 0,
      debitCredit: 0
   },
   setValuesSalesToday: () => {}
}

export const ValeusSalesContext = createContext<ValuesSales>(initialValues)