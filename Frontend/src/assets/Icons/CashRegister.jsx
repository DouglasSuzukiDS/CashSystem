export default function CashRegister(props) {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={props.w} height={props.h} className={props.className} fill={props.fill} onClick={props.onClick}>
         <path d="M136 256c0 13.3-10.7 24-24 24-13.25 0-24-10.7-24-24s10.75-24 24-24c13.3 0 24 10.7 24 24zm48 0c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm96-80c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm96-80c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zM288 0c17.7 0 32 14.33 32 32v64c0 17.7-14.3 32-32 32h-80v32h216.5c31.8 0 58.8 23.4 63.3 54.9l23.6 164.6c.4 3 .6 6 .6 9V448c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64v-59.5c0-3 .215-6 .643-9L24.15 214.9c4.5-31.5 31.51-54.9 63.36-54.9H144v-32H64c-17.67 0-32-14.3-32-32V32C32 14.33 46.33 0 64 0h224zM96 48c-8.84 0-16 7.16-16 16s7.16 16 16 16h160c8.8 0 16-7.16 16-16s-7.2-16-16-16H96zM64 464h384c8.8 0 16-7.2 16-16v-16H48v16c0 8.8 7.16 16 16 16zm360.5-256H87.51c-7.97 0-14.72 5.9-15.84 13.7L48.49 384H463.5l-23.2-162.3c-1.1-7.8-7.8-13.7-15.8-13.7z" />
      </svg>
   )
}