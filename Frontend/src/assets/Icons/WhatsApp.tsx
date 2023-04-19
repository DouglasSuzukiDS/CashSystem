import { IconsProps } from "../../types/IconsProps"

export const WhatsApp = ({ w, h, className, fill, onClick }: IconsProps) => {
   return (
      <svg viewBox="0 0 43 43" xmlns="http://www.w3.org/2000/svg"
         width={w} height={h} className={className} fill={fill} onClick={onClick}>
         <path d="M36.0089 6.8125C32.2679 3.0625 27.2857 1 21.9911 1C11.0625 1 2.16964 9.89286 2.16964 20.8214C2.16964 24.3125 3.08036 27.7232 4.8125 30.7321L2 41L12.5089 38.2411C15.4018 39.8214 18.6607 40.6518 21.9821 40.6518H21.9911C32.9107 40.6518 42 31.7589 42 20.8304C42 15.5357 39.75 10.5625 36.0089 6.8125ZM21.9911 37.3125C19.0268 37.3125 15.5268 36.1607 13 34.6607L6.76786 36.2946L8.42857 30.2143C6.77679 27.5893 5.51786 23.9375 5.51786 20.8214C5.51786 11.7411 12.9107 4.34821 22 4.34821C26.4018 4.34821 30.5357 6.0625 33.6429 9.17857C36.75 12.2946 38.6607 16.4286 38.6518 20.8304C38.6518 29.9196 31.0714 37.3125 21.9911 37.3125Z" stroke="url(#paint0_linear_54_7)" strokeWidth="2" />
         <path d="M31.8464 26.9629C27.2392 35.6106 5.36812 19.6735 14.6673 12.2494C15.6355 12.0583 16.1757 12.0324 17.1286 12.3266L18.7771 16.3257C19.1276 17.4931 18.6534 18.076 17.3117 19.061C18.8987 22.324 20.2445 23.8444 24.5074 25.2976C25.9461 23.6824 26.7558 22.6866 28.1107 23.5265L30.6367 24.6822C32.0851 25.5589 32.3841 26.056 31.8464 26.9629Z" stroke="url(#paint1_linear_54_7)" strokeWidth="2" />
         <defs>
            <linearGradient id="paint0_linear_54_7" x1="22" y1="1" x2="41.9644" y2="48.0618" gradientUnits="userSpaceOnUse">
               <stop stopColor="#081C65" />
               <stop offset="1" stopColor="#13ADDF" />
            </linearGradient>
            <linearGradient id="paint1_linear_54_7" x1="22" y1="1" x2="41.9644" y2="48.0618" gradientUnits="userSpaceOnUse">
               <stop stopColor="#081C65" />
               <stop offset="1" stopColor="#13ADDF" />
            </linearGradient>
         </defs>
      </svg>
   )
}

