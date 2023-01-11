import { PropsIcons } from "../../types/PropsIcons"

export default function SquareXMark({ w, h, className, fill, onClick }: PropsIcons) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
      width={w} height={h} className={className} fill={fill} onClick={onClick} >
      <path d="M143 175c9.4-9.3 24.6-9.3 33.1 0l47 47.1L271 175c9.4-9.3 24.6-9.3 33.1 0 10.2 9.4 10.2 24.6 0 33.1l-46.2 47 46.2 47.9c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0l-47.9-46.2-47 46.2c-8.5 10.2-23.7 10.2-33.1 0-9.3-8.5-9.3-23.7 0-33.1l47.1-47.9-47.1-47c-9.3-8.5-9.3-23.7 0-33.1zM0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm48 0v320c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.84-7.2-16-16-16H64c-8.84 0-16 7.16-16 16z" />
    </svg>
  )
}