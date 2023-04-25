import { useState } from "react"
import { CircleCheck } from "../../assets/Icons/CircleCheck"
import { Envelope } from "../../assets/Icons/Envelope"
import { GitHub } from "../../assets/Icons/GitHub"
import { Linkedin } from "../../assets/Icons/Linkedin"
import { Texugo } from "../../assets/Icons/Texugo"
import { WhatsApp } from "../../assets/Icons/WhatsApp"
import { XMark } from "../../assets/Icons/XMark"
import { ActionsType } from "../../types/ActionsType"
import { AboutContactInfo } from "../AboutContact/AboutContact"

export const AboutMe = ({ close }: ActionsType) => {

   const [aboutContact, setAboutContact] = useState(false)
   const [aboutWhatsApp, setAboutWhatsApp] = useState(false)
   const [aboutEmail, setAboutEmail] = useState(false)

   const contact = document.querySelector('#contact') as HTMLParagraphElement

   const handleShowWhatsApp = () => {
      // console.log('whats')
      setAboutEmail(false)

      if(aboutContact) {
         setAboutWhatsApp(!aboutWhatsApp)
      } else {
         setAboutContact(!aboutContact)
         setAboutWhatsApp(!aboutWhatsApp)
      }
   }

   const handleShowEmail = () => {
      // console.log('email')
      setAboutWhatsApp(false)

      if(aboutContact) {
         setAboutEmail(!aboutEmail)
      } else {
         setAboutContact(!aboutContact)
         setAboutEmail(!aboutEmail)
      }
   }

   return (
      <main className="containerAboutMe flex w-100 mr-3">
         <div className="aboutMe">

            <div className="aboutMeInfos p-1">
               <div className="aboutHeader f sbt text-color">
                  <div className="aboutPhotoArea flex">
                     <div className="aboutPhoto flex p-2">
                        <Texugo w="100" h="112" />
                     </div>
                  </div>

                  <div className='closeAboutMe opacity pointer'>
                     <XMark w='24' h='24'
                        className=''
                        onClick={close}
                     />
                  </div>
               </div>

               <div className="aboutDesc mt-4 flex column text-color text-center">
                  <h4 className="text-gradient-blue">Nick Diatlov</h4>
                  <p className="pg3">Desenvolvedor Frontend</p>

                  <p className="pg5 mt-1">React, Node, Typescript, SASS, <br /> Styled-Components, MySQL</p>
               </div>

               <div className="aboutSocial my-2 flex sar">
                  <a href='https://www.linkedin.com/in/douglas-suzuki/' target="_blank" rel="noreferrer">
                     <Linkedin w="40" h="40" className="pointer opacity" />
                  </a>

                  <WhatsApp w="40" h="40" className="pointer opacity" fill="none" onClick={handleShowWhatsApp} />

                  <a href='https://github.com/DouglasSuzukiDS' target="_blank" rel="noreferrer">
                     <GitHub w="40" h="40" className="pointer opacity" />
                  </a>

                  <Envelope w="40" h="40" className="pointer opacity" fill="none" onClick={handleShowEmail} />
               </div>

               {
                  aboutContact && // Somente se aboutContact for TRUE vai renderizar a opção que for TRUE
                     <>
                        {
                           aboutWhatsApp &&
                              <AboutContactInfo contact='(11) 96660-0666' />
                        }

                        {
                           aboutEmail &&
                              <AboutContactInfo contact='nickdev@email.com' />
                        }
                     </>
               }

               <button
                  className="btn btn-info mt-2 w-100"
                  onClick={close}
               >
                  Ok
                  <CircleCheck w='23' h='23' fill='var(--bs-dark)' className='ml-1' />
               </button>
            </div>


         </div>
      </main>
   )
}