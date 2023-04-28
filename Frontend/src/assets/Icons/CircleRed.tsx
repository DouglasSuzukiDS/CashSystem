import { IconsProps } from "../../types/IconsProps"

export const CircleRed = ({ w, h, className, fill, onClick }: IconsProps) => {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 84" fill='none'
         width={w} height={h} className={className} onClick={onClick} >
         <path d="M41.8893 30.1245L53.5129 39.2296M41.8893 30.1245L30.4871 39.2296M41.8893 30.1245L60.2657 16L53.5129 39.2296M41.8893 30.1245L23.2915 16L30.4871 39.2296M53.5129 39.2296L48.9742 53.1206M53.5129 39.2296L72 53.1206H48.9742M48.9742 53.1206H34.9151M48.9742 53.1206L41.8893 76L34.9151 53.1206M34.9151 53.1206L30.4871 39.2296M34.9151 53.1206H12L30.4871 39.2296M82 42C82 64.0914 64.0914 82 42 82C19.9086 82 2 64.0914 2 42C2 19.9086 19.9086 2 42 2C64.0914 2 82 19.9086 82 42Z" stroke="url(#paint0_linear_202_17)" stroke-width="4" />
         <defs>
            <linearGradient id="paint0_linear_202_17" x1="-18.3774" y1="9.2" x2="34.6126" y2="66.2205" gradientUnits="userSpaceOnUse">
               <stop stopColor="#DC3545" />
               <stop offset="1" stopColor="#1C1F23" />
            </linearGradient>
         </defs>
      </svg>
   )
}