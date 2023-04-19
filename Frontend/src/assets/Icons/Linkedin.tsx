import { IconsProps } from "../../types/IconsProps"

export const Linkedin = ({ w, h, className, fill, onClick }: IconsProps) => {
   return (
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"
         width={w} height={h} className={className} fill={fill} onClick={onClick}>
         <path d="M39 25.33V39H32.7161V26.9997C32.7161 25.4943 32.7133 23.5243 32.0834 21.9339C31.7571 21.1098 31.2455 20.3371 30.4429 19.7772C29.6382 19.2159 28.6263 18.9281 27.4045 18.9281C26.1966 18.9281 25.1718 19.1644 24.3242 19.6336C23.4709 20.1061 22.8568 20.7819 22.4258 21.5636C21.5896 23.0798 21.4321 25.017 21.4321 26.7765V39H15.1482V14.294H21.1018V16.937V17.937H22.1018H22.2179H22.8209L23.1023 17.4037C24.0447 15.6176 26.4179 13.6244 30.0643 13.6244C34.0141 13.6244 36.1278 14.9032 37.3332 16.818C38.6055 18.8388 39 21.7623 39 25.33ZM7.95357 39H1.66071V14.294H7.95357V39ZM4.80268 8.65111C2.71543 8.65111 1 6.91467 1 4.80279C1 3.79422 1.40064 2.82696 2.11379 2.1138C2.82693 1.40064 3.79415 1 4.80268 1C5.8112 1 6.77843 1.40064 7.49157 2.1138C8.20471 2.82696 8.60536 3.79422 8.60536 4.80279C8.60536 6.91455 6.88916 8.65111 4.80268 8.65111Z" fill="url(#paint0_linear_38_102)" stroke="url(#paint1_linear_38_102)" strokeWidth="2" />
         <defs>
            <linearGradient id="paint0_linear_38_102" x1="20" y1="0" x2="39.9644" y2="47.0618" gradientUnits="userSpaceOnUse">
               <stop stopColor="#081C65" />
               <stop offset="1" stopColor="#13ADDF" />
            </linearGradient>
            <linearGradient id="paint1_linear_38_102" x1="19.4286" y1="20" x2="27.9349" y2="40.7624" gradientUnits="userSpaceOnUse">
               <stop stopColor="#202225" />
               <stop offset="1" stopColor="#BB2D3B" />
            </linearGradient>
         </defs>
      </svg>
   )
}
