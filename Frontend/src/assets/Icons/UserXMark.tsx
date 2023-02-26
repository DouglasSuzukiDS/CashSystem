import { IconsProps } from "../../types/IconsProps"

export const UserXMark = ({ w, h, className, fill, onClick }: IconsProps) => {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" 
         width={w} height={h} className={className} fill={fill} onClick={onClick}>
         <path d="M274.7 304H173.3C77.61 304 0 381.6 0 477.3 0 496.5 15.52 512 34.66 512h378.7c19.14 0 34.64-15.5 34.64-34.7 0-95.7-77.6-173.3-173.3-173.3zM48.71 464c6.67-62.9 59.99-112 124.59-112h101.4c64.61 0 117.1 49.13 124.6 112H48.71zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0 96 57.31 96 128s57.3 128 128 128zm0-208c44.11 0 80 35.89 80 80s-35.89 80-80 80c-44.1 0-80-35.9-80-80 0-44.11 35.9-80 80-80zm353.9 175.1l47.03-47.03c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L544 190.1l-47.03-47.03c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l47.03 47.03-47.03 47.03c-9.375 9.375-9.375 24.56 0 33.94 9.373 9.373 24.56 9.381 33.94 0L544 257.9l47.03 47.03c9.373 9.373 24.56 9.381 33.94 0 9.375-9.375 9.375-24.56 0-33.94L577.9 223.1z" />
      </svg>
   )
}