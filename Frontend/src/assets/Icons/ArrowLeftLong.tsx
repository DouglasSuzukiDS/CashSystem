import { IconsProps } from "../../types/IconsProps"

export const ArrowLeftLong = ({ w, h, className , fill, onClick }: IconsProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
      width={w} height={h} className={className} fill={fill} onClick={onClick}>
      <path d="M176.1 103C181.7 107.7 184 113.8 184 120S181.7 132.3 176.1 136.1L81.94 232H488C501.3 232 512 242.8 512 256s-10.75 24-24 24H81.94l95.03 95.03c9.375 9.375 9.375 24.56 0 33.94s-24.56 9.375-33.94 0l-136-136c-9.375-9.375-9.375-24.56 0-33.94l136-136C152.4 93.66 167.6 93.66 176.1 103z" />
    </svg>
  )
}