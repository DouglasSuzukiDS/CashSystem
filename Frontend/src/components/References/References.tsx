import { GlobeWWW } from "../../assets/Icons/GlobeWWW";
import { HandShake } from "../../assets/Icons/HandShake";
import { HandshakeRussian } from "../../assets/Icons/HandshakeRussian";
import { Instagram } from "../../assets/Icons/Instagram";
import { LKD } from "../../assets/Icons/LKD";
import { RussianFlag } from "../../assets/Icons/RussianFlag";
import { Udemy } from "../../assets/Icons/Udemy";
import { XMark } from "../../assets/Icons/XMark";
import { Youtube } from "../../assets/Icons/Youtube";
import { ActionsType } from "../../types/ActionsType";

export const References = ({ close }: ActionsType) => {
   return(
      <div className="containerReferences">
         <h4 className="flex sbt w-100">
            <div className="flex text-info w-100">
               <p>Ajuda e Referências </p>
               <HandshakeRussian w='50' h='24' className='ml-1' />
               <RussianFlag w="30" h="24" />
            </div>

            <div className="referencesClose flex pointer opacity">
               <XMark w='24' h='24' className='' onClick={ close } />
            </div>
         </h4>

         <div className="references flex border">
            <p>Name</p>
            <Udemy w="24" h="25" fill="var(--bs-danger)" />
            <LKD w="24" h="24" fill="var(--bs-danger)" />
            <Youtube w="35" h="24" fill="var(--bs-danger)" />
            <RussianFlag w="30" h="24" />
            <GlobeWWW w="24" h="24" fill="var(--bs-danger)" />
            <Instagram w="24" h="24" fill="var(--bs-danger)" />
         </div>
      </div>
   )
}