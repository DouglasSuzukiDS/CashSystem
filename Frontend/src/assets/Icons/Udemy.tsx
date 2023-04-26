import { IconsProps } from "../../types/IconsProps"

export const Udemy = ({ w, h, className, fill, onClick }: IconsProps) => {
   return (
      <svg xmlns="http://www.w3.org/2000/svg"
         width={w} height={h} className={className} fill={fill} onClick={onClick}>
         <g clipPath="url(#clip0_605_315)">
            <path d="M13.999 7.14676L6.99847 3.5735L0 7.14676V3.5735L6.99949 0.000244141L14 3.5735V7.14676H13.999Z" fill="#A435F0" />
            <path d="M0 10.1477H3.66679V18.0245C3.66679 20.0595 5.38537 21.0517 6.99949 21.0517C8.62752 21.0517 10.3336 20.0331 10.3336 17.9972V10.1477H14V18.2123C14 20.0868 13.3335 21.5335 12.0002 22.5254C10.6663 23.5167 9.00027 23.9994 6.96863 23.9994C4.93902 23.9994 3.27199 23.5176 1.96991 22.5254C0.666473 21.5344 0 20.1414 0 18.2924V10.1477Z" />
         </g>
         <defs>
            <clipPath id="clip0_605_315">
               <rect width="14" height="24" fill="white" />
            </clipPath>
         </defs>
      </svg>
   )
}

