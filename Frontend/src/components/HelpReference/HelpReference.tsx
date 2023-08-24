import { useEffect, useState } from "react"

import { ReferencesType } from "../../types/ReferencesType"

import { LKD } from "../../assets/Icons/LKD"
import { GlobeWWW } from "../../assets/Icons/GlobeWWW"
import { Youtube } from "../../assets/Icons/Youtube"
import { InstagramGradient } from "../../assets/Icons/InstagramGradient"

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
      
      if(referencePhrase01) {
         setHelpReferencePhrase01(true)
      } else {
         setHelpReferencePhrase01(false)
      }

      if(referencePhrase02) {
         setHelpReferencePhrase02(true)
      } else {
         setHelpReferencePhrase02(false)
      }

   }, [ referenceInstagram, referenceLink01, referenceLink02, referenceLink03, referenceLink04, referenceLink05, referenceLinkedin, referencePhrase01, referencePhrase02, referenceSite, referenceYouTube])

   return (
      <div className="helpReferenceInfosContainer flex column p-1">

         <div className="helpReferenceInfos flex">
            <p className="inputTF mr-1 text-russian-gradient pg2 bold">{ referenceName }</p>

            <div className="flex">
               { helpReferenceSite &&
                  <a href={`${ referenceSite }`} className='flex mr-1 opacity' target='_blank' rel="noreferrer">
                     <GlobeWWW w="24" h="24" fill="var(--blue-russian)" />
                  </a>
               }

               { helpReferenceInstagram &&
                  <a href={`${ referenceInstagram }`} className='flex mr-1' target='_blank' rel="noreferrer">
                     <InstagramGradient w="24" h="24" className="opacity"/>
                  </a>
               }

               { helpReferenceYouTube &&
                  <a href={`${ referenceYouTube }`} className='flex mr-1 opacity' target='_blank' rel="noreferrer">
                     <Youtube w="34" h="24" fill="var(--red-russian)" />
                  </a>
               }

               { helpReferenceLinkedin &&
                  <a href={`${ referenceLinkedin }`} className='flex mr-1 opacity' target='_blank' rel="noreferrer">
                     <LKD w="24" h="24" fill="var(--blue-russian)" />
                  </a>
               }
            </div>

         </div>

         <div className="mt-1 px-1 text-center pg4 text-color">
            { referenceDesc }

            { 
               helpReferenceLink01 &&
                  <>
                     <br />
                     <a href={`${ referenceLink01 }`} target="_blank" rel="noreferrer"> 
                        <span className="bold italic flex mt-1 text-russian-gradient"> { referenceLabelLink01 } </span>
                     </a>
                  </>
            }

            { 
               helpReferenceLink02 &&
                  <>
                     <br />
                     <a href={`${ referenceLink02 }`} target="_blank" rel="noreferrer"> 
                        <span className="bold italic flex text-russian-gradient"> { referenceLabelLink02 } </span>
                     </a>
                  </>
            }

            { 
               helpReferenceLink03 &&
                  <>
                     <br />
                     <a href={`${ referenceLink03 }`} target="_blank" rel="noreferrer"> 
                        <span className="bold italic flex text-russian-gradient"> { referenceLabelLink03 } </span>
                     </a>
                  </>
            }

            { 
               helpReferenceLink04 &&
                  <>
                     <br />
                     <a href={`${ referenceLink04 }`} target="_blank" rel="noreferrer"> 
                        <span className="bold italic flex text-russian-gradient"> { referenceLabelLink04 } </span>
                     </a>
                  </>
            }

            { 
               helpReferenceLink05 &&
                  <>
                     <br />
                     <a href={`${ referenceLink05 }`} target="_blank" rel="noreferrer"> 
                        <span className="bold italic flex mt-1"> { referenceLabelLink05 } </span>
                     </a>
                  </>
            }

            {
               helpReferencePhrase01 &&
                  <p className="bold italic flex mt-1 text-russian-gradient"> { referencePhrase01 } </p>
            }

            {
               helpReferencePhrase02 &&
                  <p className="bold italic flex mt-1 text-russian-gradient"> { referencePhrase02 } </p>
            }
         </div>
      </div>
   )
}