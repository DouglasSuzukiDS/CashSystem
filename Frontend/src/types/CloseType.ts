import { Product } from "./ProductType"

export type CloseType = {
   close?: () => void
   id?: string
   listProducts?: Product[]
}