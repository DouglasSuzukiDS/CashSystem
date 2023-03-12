import { ProductType } from "./ProductType"

export type IconsProps = {
   w?: string
   h?: string 
   fill?: string
   className?: string
   onClick?: () => void
   handleAdd?: (id: any) => {}
   handleMinus?: (id: any) => {}
}