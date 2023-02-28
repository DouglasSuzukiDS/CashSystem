import { UserType } from './UserType';
import { ProductType } from "./ProductType"

export type ActionsType = {
   close?: () => void
   handleManager?: () => boolean
   id?: string
   listProducts?: ProductType[]
   listUsers?: UserType[]
}