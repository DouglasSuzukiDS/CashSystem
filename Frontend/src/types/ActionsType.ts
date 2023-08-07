import { ValuesSalesType } from './ValuesSalesType';
import { SalesType } from './SalesType';
import { UserType } from './UserType';
import { ProductType } from "./ProductType"
import { IconsProps } from './IconsProps';
import { UserDataSectionType } from './UserDataSectionType';

export type ActionsType = {
   // Functions for Header Component
   startJob?: () => void
   handleOptionSystem?: () => void
   handleCloseCash?: () => void
   open?: boolean

   close?: () => void
   onKeyDown?: () => void
   handleManager?: () => boolean
   onClick?: () => void
   cartAddItem?: (prod: ProductType) => void
   returnItems?: (prod: ProductType) => void
   handleNewUser?: () => void
   handleManagerUser?: () => void
   handleNewProduct?: () => void
   handleManagerProduct?: () => void

   userInfos?: UserDataSectionType
   userIsAdmin?: boolean
   handleHistoricModal?: () => void
   handleConfirmPayment?: () => void
   handleAddProductModal?: () => void
   handleClearCartList?: () => void
   handleReferencesModal?: () => void
   handleAboutMeModal?: () => void
   handleCloseSystem?: () => void
   
   className?: string
   id?: string
   listProducts?: ProductType[]
   listUsers?: UserType[]
   listSales?: SalesType[]
   valuesSales?: ValuesSalesType
   text?: string
   color?: string
   icon?: IconsProps
}