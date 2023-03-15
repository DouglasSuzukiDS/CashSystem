import { UserType } from './UserType';
import { ProductType } from "./ProductType"
import { IconsProps } from './IconsProps';

export type ActionsType = {
   close?: () => void
   handleManager?: () => boolean
   onClick?: () => void
   cartAddItem?: (prod: ProductType) => void
   returnItems?: (prod: ProductType) => void
   className?: string
   id?: string
   listProducts?: ProductType[]
   listUsers?: UserType[]
   text?: string
   color?: string
   icon?: IconsProps
}