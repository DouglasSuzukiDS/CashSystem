import { PropsIcons } from "../../types/PropsIcons"

export default function LockKeyHole({ w, h, className, fill, onClick }: PropsIcons) {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" 
         width={w} height={h} className={className} fill={fill} onClick={onClick}>
         <path d="M248 384c0 13.3-10.7 24-24 24s-24-10.7-24-24v-64c0-13.3 10.7-24 24-24s24 10.7 24 24v64zM224 0c70.7 0 128 57.31 128 128v64h32c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V256c0-35.3 28.65-64 64-64h32v-64C96 57.31 153.3 0 224 0zm0 48c-44.2 0-80 35.82-80 80v64h160v-64c0-44.18-35.8-80-80-80zM64 240c-8.84 0-16 7.2-16 16v192c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V256c0-8.8-7.2-16-16-16H64z" />
      </svg>
   )
}