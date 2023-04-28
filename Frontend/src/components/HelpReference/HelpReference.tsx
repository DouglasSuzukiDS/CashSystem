import { useEffect, useState } from "react"
import { LKD } from "../../assets/Icons/LKD"
import { ActionsType } from "../../types/ActionsType"
import { GlobeWWW } from "../../assets/Icons/GlobeWWW"
import { Instagram } from "../../assets/Icons/Instagram"
import { Youtube } from "../../assets/Icons/Youtube"
import { ReferencesType } from "../../types/ReferencesType"

export const HelpReference = (
   { 
      referenceName, referenceSite, referenceYouTube, referenceLinkedin, referenceInstagram, referenceDesc, referenceLabelLink01, referenceLink01, referenceLabelLink02, referenceLink02, referenceLabelLink03, referenceLink03, referenceLabelLink04, referenceLink04, referenceLabelLink05, referenceLink05, referencePhrase01, referencePhrase02
   }: ReferencesType) => {

   const [helpReferenceSite, setHelpReferenceSite] = useState(false)

   const [helpReferenceInstagram, setHelpReferenceInstagram] = useState(false)

   const [helpReferenceYouTube, setHelpReferenceYouTube] = useState(false)

   const [helpReferenceLinkedin, setHelpReferenceLinkedin] = useState(false)

   const [helpReferenceLink01, setHelpReferenceLink01] = useState(false)

   const [helpReferenceLink02, setHelpReferenceLink02] = useState(false)

   const [helpReferenceLink03, setHelpReferenceLink03] = useState(false)

   const [helpReferenceLink04, setHelpReferenceLink04] = useState(false)

   const [helpReferenceLink05, setHelpReferenceLink05] = useState(false)

   const [helpReferencePhrase01, setHelpReferencePhrase01] = useState(false)

   const [helpReferencePhrase02, setHelpReferencePhrase02] = useState(false)

   useEffect(() => {
      if (referenceSite) {
         setHelpReferenceSite(true)
      } else {
         setHelpReferenceSite(false)
      }

      if (referenceInstagram) {
         setHelpReferenceInstagram(true)
      } else {
         setHelpReferenceInstagram(false)
      }

      if (referenceYouTube) {
         setHelpReferenceYouTube(true)
      } else {
         setHelpReferenceYouTube(false)
      }

      if (referenceLinkedin) {
         setHelpReferenceLinkedin(true)
      } else {
         setHelpReferenceLinkedin(false)
      }

      if (referenceLink01) {
         setHelpReferenceLink01(true)
      } else {
         setHelpReferenceLink01(false)
      }

      if (referenceLink02) {
         setHelpReferenceLink02(true)
      } else {
         setHelpReferenceLink02(false)
      }
      
      if (referenceLink03) {
         setHelpReferenceLink03(true)
      } else {
         setHelpReferenceLink03(false)
      }

      if (referenceLink04) {
         setHelpReferenceLink04(true)
      } else {
         setHelpReferenceLink04(false)
      }

      if (referenceLink05) {
         setHelpReferenceLink05(true)
      } else {
         setHelpReferenceLink05(false)
      }
      
      if(referencePhase01) {
         setHelpReferencePhase01(true)
      } else {
         setHelpReferencePhase01(false)
      }

      if(referencePhase02) {
         setHelpReferencePhase02(true)
      } else {
         setHelpReferencePhase02(false)
      }

   }, [ referenceInstagram, referenceLink01, referenceLink02, referenceLink03, referenceLink04, referenceLink05, referenceLinkedin, referencePhrase01, referencePhrase02, referenceSite, referenceYouTube])

   return (
      <div className="helpReferenceInfosContainer flex column p-1">

         <div className="helpReferenceInfos flex border">
            <p className="inputTF mr-1 border3">{ referenceName }</p>

            <div className="flex border4">
               { helpReferenceSite &&
                  <a href={`${ referenceSite }`} className='flex mr-1' target='_blank' rel="noreferrer">
                     <GlobeWWW w="24" h="24" />
                  </a>
               }

               { helpReferenceInstagram &&
                  <a href={`${ referenceInstagram }`} className='flex mr-1' target='_blank' rel="noreferrer">
                     <Instagram w="24" h="24" />
                  </a>
               }

               { helpReferenceYouTube &&
                  <a href={`${ referenceYouTube }`} className='flex mr-1' target='_blank' rel="noreferrer">
                     <Youtube w="34" h="24" />
                  </a>
               }

               { helpReferenceLinkedin &&
                  <a href={`${ referenceLinkedin }`} className='flex mr-1' target='_blank' rel="noreferrer">
                     <LKD w="24" h="24" />
                  </a>
               }
            </div>

         </div>

         <p className="border3 mt-1 px-1 text-center pg4">
            { referenceDesc }

            { 
               helpReferenceLink01 &&
                  <>
                     <br />
                     <a href={`${ referenceLink01 }`} target="_blank" rel="noreferrer"> { referenceLabelLink01 } </a>
                  </>
            }

            { 
               helpReferenceLink02 &&
                  <>
                     <br />
                     <a href={`${ referenceLink02 }`} target="_blank" rel="noreferrer"> { referenceLabelLink02 } </a>
                  </>
            }

            { 
               helpReferenceLink03 &&
                  <>
                     <br />
                     <a href={`${ referenceLink03 }`} target="_blank" rel="noreferrer"> { referenceLabelLink03 } </a>
                  </>
            }

            { 
               helpReferenceLink04 &&
                  <>
                     <br />
                     <a href={`${ referenceLink04 }`} target="_blank" rel="noreferrer"> { referenceLabelLink04 } </a>
                  </>
            }

            { 
               helpReferenceLink05 &&
                  <>
                     <br />
                     <a href={`${ referenceLink05 }`} target="_blank" rel="noreferrer"> { referenceLabelLink05 } </a>
                  </>
            }

            {
               helpReferencePhrase01 &&
                  <h3> { helpReferencePhrase01 } </h3>
            }

            {
               helpReferencePhrase02 &&
                  <h3> { helpReferencePhrase02 } </h3>
            }
         </p>
      </div>
   )
}