import { ProductType } from "./ProductType"

export type ActionsType = {
   close?: () => void
   id?: string
   listProducts?: ProductType[]
}