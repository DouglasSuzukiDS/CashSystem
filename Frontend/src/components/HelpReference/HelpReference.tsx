import { useEffect, useState } from "react"
import { LKD } from "../../assets/Icons/LKD"
import { ActionsType } from "../../types/ActionsType"
import { GlobeWWW } from "../../assets/Icons/GlobeWWW"
import { Instagram } from "../../assets/Icons/Instagram"
import { Youtube } from "../../assets/Icons/Youtube"

export const HelpReference = ({ className, onClick, helpReferenceName, HelpReferenceSite, HelpReferenceInstagram, HelpReferenceYouTube, HelpReferenceLinkedin, helpReferenceDesc }: ActionsType) => {

   const [helpReferenceSite, setHelpReferenceSite] = useState(false)

   const [helpReferenceInstagram, setHelpReferenceInstagram] = useState(false)

   const [helpReferenceYouTube, setHelpReferenceYouTube] = useState(false)

   const [helpReferenceLinkedin, setHelpReferenceLinkedin] = useState(false)

   useEffect(() => {
      if (HelpReferenceSite) {
         setHelpReferenceSite(true)
      } else {
         setHelpReferenceSite(false)
      }

      if (HelpReferenceInstagram) {
         setHelpReferenceInstagram(true)
      } else {
         setHelpReferenceInstagram(false)
      }

      if (HelpReferenceYouTube) {
         setHelpReferenceYouTube(true)
      } else {
         setHelpReferenceYouTube(false)
      }

      if (HelpReferenceLinkedin) {
         setHelpReferenceLinkedin(true)
      } else {
         setHelpReferenceLinkedin(false)
      }
   }, [HelpReferenceSite, HelpReferenceInstagram, HelpReferenceYouTube, HelpReferenceLinkedin])

   return (
      <div className="helpReferenceInfosContainer flex column p-1">

         <div className="helpReferenceInfos flex border">
            <p className="inputTF mr-1 border3">{helpReferenceName}</p>

            <div className="flex border4">
               { helpReferenceSite &&
                  <a href={`${ HelpReferenceSite }`} className='flex mr-1' target='_blank' rel="noreferrer">
                     <GlobeWWW w="24" h="24" />
                  </a>
               }

               { helpReferenceInstagram &&
                  <a href={`${ HelpReferenceInstagram }`} className='flex mr-1' target='_blank' rel="noreferrer">
                     <Instagram w="24" h="24" />
                  </a>
               }

               { helpReferenceYouTube &&
                  <a href={`${ HelpReferenceYouTube }`} className='flex mr-1' target='_blank' rel="noreferrer">
                     <Youtube w="34" h="24" />
                  </a>
               }

               { helpReferenceLinkedin &&
                  <a href={`${ HelpReferenceLinkedin }`} className='flex mr-1' target='_blank' rel="noreferrer">
                     <LKD w="24" h="24" />
                  </a>
               }
            </div>

         </div>

         <p className="border3 mt-1 px-1 text-center pg4">{helpReferenceDesc}</p>
      </div>
   )
}