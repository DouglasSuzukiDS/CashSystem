import { IconsProps } from "../../types/IconsProps"

export const Minus = ({ w, h, className, fill, onClick, handleMinus }: IconsProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
      width={w} height={h} className={className} fill={fill} onClick={onClick || handleMinus}>
      <path d="M432 256C432 269.3 421.3 280 408 280H40c-13.25 0-24-10.74-24-23.99C16 242.8 26.75 232 40 232h368C421.3 232 432 242.8 432 256z" />
    </svg>
  )
}