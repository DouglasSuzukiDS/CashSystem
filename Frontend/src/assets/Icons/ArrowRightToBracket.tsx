import { IconsProps } from "../../types/IconsProps"

export const ArrowRightToBracket = ({ w, h, className, fill, onClick }: IconsProps) => {
   return (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" 
     width={w} height={h} className={className} fill={fill} onClick={onClick}>
       <path d="M512 128v256c0 53.02-42.98 96-96 96h-72C330.7 480 320 469.3 320 456c0-13.26 10.75-24 24-24H416c26.4 0 48-21.6 48-48V128c0-26.4-21.6-48-48-48h-72C330.7 80 320 69.25 320 56C320 42.74 330.7 32 344 32H416C469 32 512 74.98 512 128zM345.5 239.6l-128-136C208.4 93.88 193.2 93.44 183.6 102.5C173.9 111.6 173.4 126.8 182.5 136.4L272.4 232H24C10.75 232 0 242.8 0 256s10.75 24 24 24h248.4l-89.92 95.56c-9.094 9.656-8.625 24.84 1.031 33.91C188.2 413.8 194.1 416 200 416c6.375 0 12.75-2.531 17.47-7.562l128-136C354.2 263.2 354.2 248.8 345.5 239.6z"/>
     </svg>
   )
}