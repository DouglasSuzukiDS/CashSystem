import { ValuesSalesType } from './ValuesSalesType';
import { SalesType } from './SalesType';
import { UserType } from './UserType';
import { ProductType } from "./ProductType"
import { IconsProps } from './IconsProps';

export type ActionsType = {
   close?: () => void
   handleManager?: () => boolean
   onClick?: () => void
   cartAddItem?: (prod: ProductType) => void
   returnItems?: (prod: ProductType) => void
   handleOptionSystem?: () => void
   handleNewUser?: () => void
   handleManagerUser?: () => void
   handleNewProduct?: () => void
   handleManagerProduct?: () => void
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