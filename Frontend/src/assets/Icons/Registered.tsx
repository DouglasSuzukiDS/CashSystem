import { PropsIcons } from "../../types/PropsIcons"

export default function Registered({ w, h, className, fill, onClick }: PropsIcons) {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" 
         width={w} height={h} className={className} fill={fill} onClick={onClick}>
         <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm96-256c0-44.13-35.88-80-80-80h-88c-13.25 0-24 10.75-24 24v208c0 13.25 10.75 24 24 24s24-10.75 24-24v-72h59.79l38.46 82.19C310.3 378.9 319 384 328 384c3.438 0 6.875-.719 10.19-2.25 12-5.625 17.16-19.91 11.56-31.94l-34.87-74.5C337.1 261.1 352 236.3 352 208zm-80 32h-64v-64h64c17.66 0 32 14.34 32 32s-14.3 32-32 32z" />
      </svg>
   )
}