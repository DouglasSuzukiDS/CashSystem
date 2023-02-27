import { Texugo } from "../../assets/Icons/Texugo";
import { MessageTexugoType } from "../../types/MessageTexugoType";

export const MessageTexugo = ({ msg, tw, th }: MessageTexugoType) => {
   return (
      <span className="flex column">
         <h2 className="mb-2 text-info flex">
            {msg}
         </h2>

         <Texugo w={tw} h={th} />
      </span>
   )
}