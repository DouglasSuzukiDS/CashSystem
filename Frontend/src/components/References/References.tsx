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
import { HelpReference } from "../HelpReference/HelpReference";

export const References = ({ close }: ActionsType) => {
   return (
      <div className="containerReferences flex column">
         <h4 className="flex sbt w-100">
            <div className="flex text-info w-100">
               <p className="text-russin-gradient">Ajuda e Referências </p>
               <HandshakeRussian w='50' h='24' className='ml-1' />
               <RussianFlag w="30" h="24" />
            </div>

            <div className="referencesClose flex pointer opacity">
               <XMark w='24' h='24' className='' onClick={close} />
            </div>
         </h4>

         <div className="references flex column mt-2 border3">

            {/* CFB Cursos */}
            <article className="referenceItem flex column my-1 mx-2 border">
               <HelpReference 
                  helpReferenceName='Bruno Campos (CFB Cursos)'
                  HelpReferenceSite='http://cfbcursos.com.br' 
                  HelpReferenceInstagram='https://www.instagram.com/cfbcursos/'
                  HelpReferenceYouTube='https://www.youtube.com/@cfbcursos'
                  HelpReferenceLinkedin='https://linkedin.com/in/bruno-campos-191a1a41' 
                  helpReferenceDesc='Responsável por ministrar videos aulas/cursos de excelente qualidade de forma gratuí­ta via YouTube. Me ensinando inúmeras linguagens de programação (C++, C#, HTML, CSS, Javascript, Python, Node, React, React Native, Bootstrap. Sem dúvidas, umas das melhores didáticas que possa existir.

                  Também responsável por formar toda minha base de conhecimento em programação e sempre continuar ensiando coisas novas para nossa constante evoluíndo. Canal fundamental para qualquer estudante de desenvolvimento. '
               />
            </article>

            {/* Bonieky */}
            {/* <article className="referenceItem flex column my-1 mx-2 border">
               <HelpReference 
                  helpReferenceName='Bonieky Lacerda (B7WEB)'
                  HelpReferenceSite='https://b7web.com.br/fullstack/' 
                  HelpReferenceInstagram='https://www.instagram.com/bonieky/'
                  HelpReferenceYouTube='https://www.youtube.com/@bonieky'
                  helpReferenceDesc='Produtor de um excelente curso, que na verdade são formados por pacotes de cursos para tornar transformar pessoas em desenvolvedores fullstack, WEB e Mobile. Didatica  incrí­vel, também uma das melhores que possa existir. Possui videos aulas em seu canal do YouTube que vão comprovar a qualidade da sua didatica e ví­deos sobre o mundo do desenvolvimento.'
               />
            </article> */}

            {/* Lucas e Alessandro */}
            {/* <article className="referenceItem flex column my-1 mx-2 border">
               <HelpReference 
                  helpReferenceName='Lucas e Alessandro (Suporte B7WEB)'
                  HelpReferenceSite='https://b7web.com.br/fullstack/' 
                  helpReferenceDesc='Membros do suporte do curso da B7WEB. Profissionais que buscam ajudar os alunos da melhor forma que podem. 
                  Agradecimento especial ao Lucas que venho me ajudando no entendimento e desenolvimento do meu projeto. Sem sua ajuda, talvez o processo de desenvolvimendo do projeto poderia ser muito maior.'
               />
            </article> */}

            {/* Vitor Cunha */}
            {/* <article className="referenceItem flex column my-1 mx-2 border">
               <HelpReference
                  helpReferenceName='Vitor Cunha'
                  HelpReferenceYouTube='https://www.youtube.com/@VitorCunhaCode'
                  HelpReferenceLinkedin='https://www.linkedin.com/in/vitorlostada/'
                  helpReferenceDesc='Responsável por ensinar como eu faria um CRUD utilizando React com Node e MySQL, justamente o que precisava aprender para desenvolver meu primeiro CRUD (que eu mesmo desenvolvi). Mostrando também que é possivel unir React com Electron. Sua didatica também é excelente, extremamente simples, rápida e direta. '
               />
            </article> */}
            
            {/* Huriel */}
            {/* <article className="referenceItem flex column my-1 mx-2 border">
               <HelpReference 
                  helpReferenceName='Huriel'
                  HelpReferenceInstagram='https://www.instagram.com/huri3l'
                  HelpReferenceYouTube='https://www.youtube.com/@huriel'
                  HelpReferenceLinkedin='https://linkedin.com/in/huri3l' 
                  helpReferenceDesc='Responsável por realizar um fantastica playlist buscando explicar o uso e conceitos de todos os Hooks do React. Também possí­veis outros ví­deos em seu canal do youtube buscando ensinar ferramentas/recursos para impulsonar o desenvolvimento frontend. Não é atoa que sua capa do YouTube contem a frase "Impulsionando Desenvolvedores". Sua didática é excelente, busca explicar todo o conceito de forma simples e objetiva.'
               />
            </article> */}

            {/* Mathues Battisti */}
            {/* <article className="referenceItem flex column my-1 mx-2 border">
               <HelpReference 
                  helpReferenceName='Mathues Battisti(Hora de Codar)'
                  HelpReferenceSite='https://horadecodar.com.br' 
                  HelpReferenceInstagram='https://www.instagram.com/HoraDeCodar'
                  HelpReferenceYouTube='https://www.youtube.com/@matheusbattisti'
                  HelpReferenceLinkedin='https://linkedin.com/in/matheusbattisti' 
                  helpReferenceDesc='Responsável por ministrar excelentes aulas via YouTube e cursos via Udemy / Plataforma Hora de Codar. Fui aluno do curso de Javascript na Udemy, onde pude comprovar sua excelencia no ensino, dando suporte no decorrer dos estudos. Possui um site/blog com artigos/tutoriais de programação.
                  Me salvou inúmeras vezes atravez das suas aulas/site/blog. Alguma dúvida de como usar algum recurso em Javascript? O Matheus talvez possa ter algum conteúdo para te salvar.'
               />
            </article> */}

            {/* João Ribeiro */}
            {/* <article className="referenceItem flex column my-1 mx-2 border">
               <HelpReference 
                  helpReferenceName='Bruno Campos (CFB Cursos)'
                  HelpReferenceSite='https://www.udemy.com/course/desenvolvimento-web-compacto-e-completo'
                  HelpReferenceYouTube='https://www.youtube.com/@JLDRPT'
                  helpReferenceDesc='Pra ser bem sincero, ví­ apenas alguns ví­deos dele, mas é notável que sua didatica também é incrivel, simples e direta. Recentemente publicou um curso de Desenvolvimento Web na Udemy e plo o que vi da sua grade é muito rica.'
               />
            </article> */}

            {/* Jovem Programador */}
            {/* <article className="referenceItem flex column my-1 mx-2 border">
               <HelpReference 
                  helpReferenceName='Rodrido (Jovem Progamador)'
                  HelpReferenceInstagram='https://www.instagram.com/rodrigolucas322'
                  HelpReferenceYouTube='https://www.youtube.com/@JovemProgramadorOficial' 
                  helpReferenceDesc='Descobri o canal dele a pouco tempo buscando entender, aprender como desenvolver um Carrinho de Compras, utilizando React Hooks e desenvolver o sistema de Login.'
               />
            </article> */}

            {/* <article className="referenceItem flex column my-1 mx-2 border">
               <HelpReference 
                  helpReferenceName='Bruno Campos (CFB Cursos)'
                  HelpReferenceSite='http://cfbcursos.com.br' 
                  HelpReferenceInstagram='https://www.instagram.com/cfbcursos/'
                  HelpReferenceYouTube='https://www.youtube.com/@cfbcursos'
                  HelpReferenceLinkedin='https://linkedin.com/in/bruno-campos-191a1a41' 
                  helpReferenceDesc='Responsável por ministrar videos aulas/cursos de excelente qualidade de forma gratuí­ta via YouTube. Me ensinando inúmeras linguagens de programação (C++, C#, HTML, CSS, Javascript, Python, Node, React, React Native, Bootstrap. Sem dúvidas, umas das melhores didáticas que possa existir.

                  Também responsável por formar toda minha base de conhecimento em programação e sempre continuar ensiando coisas novas para nossa constante evoluíndo. Canal fundamental para qualquer estudante de desenvolvimento. '
               />
            </article>

            <article className="referenceItem flex column my-1 mx-2 border">
               <HelpReference 
                  helpReferenceName='Bruno Campos (CFB Cursos)'
                  HelpReferenceSite='http://cfbcursos.com.br' 
                  HelpReferenceInstagram='https://www.instagram.com/cfbcursos/'
                  HelpReferenceYouTube='https://www.youtube.com/@cfbcursos'
                  HelpReferenceLinkedin='https://linkedin.com/in/bruno-campos-191a1a41' 
                  helpReferenceDesc='Responsável por ministrar videos aulas/cursos de excelente qualidade de forma gratuí­ta via YouTube. Me ensinando inúmeras linguagens de programação (C++, C#, HTML, CSS, Javascript, Python, Node, React, React Native, Bootstrap. Sem dúvidas, umas das melhores didáticas que possa existir.

                  Também responsável por formar toda minha base de conhecimento em programação e sempre continuar ensiando coisas novas para nossa constante evoluíndo. Canal fundamental para qualquer estudante de desenvolvimento. '
               />
            </article>

            <article className="referenceItem flex column my-1 mx-2 border">
               <HelpReference 
                  helpReferenceName='Bruno Campos (CFB Cursos)'
                  HelpReferenceSite='http://cfbcursos.com.br' 
                  HelpReferenceInstagram='https://www.instagram.com/cfbcursos/'
                  HelpReferenceYouTube='https://www.youtube.com/@cfbcursos'
                  HelpReferenceLinkedin='https://linkedin.com/in/bruno-campos-191a1a41' 
                  helpReferenceDesc='Responsável por ministrar videos aulas/cursos de excelente qualidade de forma gratuí­ta via YouTube. Me ensinando inúmeras linguagens de programação (C++, C#, HTML, CSS, Javascript, Python, Node, React, React Native, Bootstrap. Sem dúvidas, umas das melhores didáticas que possa existir.

                  Também responsável por formar toda minha base de conhecimento em programação e sempre continuar ensiando coisas novas para nossa constante evoluíndo. Canal fundamental para qualquer estudante de desenvolvimento. '
               />
            </article>

            <article className="referenceItem flex column my-1 mx-2 border">
               <HelpReference 
                  helpReferenceName='Bruno Campos (CFB Cursos)'
                  HelpReferenceSite='http://cfbcursos.com.br' 
                  HelpReferenceInstagram='https://www.instagram.com/cfbcursos/'
                  HelpReferenceYouTube='https://www.youtube.com/@cfbcursos'
                  HelpReferenceLinkedin='https://linkedin.com/in/bruno-campos-191a1a41' 
                  helpReferenceDesc='Responsável por ministrar videos aulas/cursos de excelente qualidade de forma gratuí­ta via YouTube. Me ensinando inúmeras linguagens de programação (C++, C#, HTML, CSS, Javascript, Python, Node, React, React Native, Bootstrap. Sem dúvidas, umas das melhores didáticas que possa existir.

                  Também responsável por formar toda minha base de conhecimento em programação e sempre continuar ensiando coisas novas para nossa constante evoluíndo. Canal fundamental para qualquer estudante de desenvolvimento. '
               />
            </article>

            <article className="referenceItem flex column my-1 mx-2 border">
               <HelpReference 
                  helpReferenceName='Bruno Campos (CFB Cursos)'
                  HelpReferenceSite='http://cfbcursos.com.br' 
                  HelpReferenceInstagram='https://www.instagram.com/cfbcursos/'
                  HelpReferenceYouTube='https://www.youtube.com/@cfbcursos'
                  HelpReferenceLinkedin='https://linkedin.com/in/bruno-campos-191a1a41' 
                  helpReferenceDesc='Responsável por ministrar videos aulas/cursos de excelente qualidade de forma gratuí­ta via YouTube. Me ensinando inúmeras linguagens de programação (C++, C#, HTML, CSS, Javascript, Python, Node, React, React Native, Bootstrap. Sem dúvidas, umas das melhores didáticas que possa existir.

                  Também responsável por formar toda minha base de conhecimento em programação e sempre continuar ensiando coisas novas para nossa constante evoluíndo. Canal fundamental para qualquer estudante de desenvolvimento. '
               />
            </article>

            <article className="referenceItem flex column my-1 mx-2 border">
               <HelpReference 
                  helpReferenceName='Bruno Campos (CFB Cursos)'
                  HelpReferenceSite='http://cfbcursos.com.br' 
                  HelpReferenceInstagram='https://www.instagram.com/cfbcursos/'
                  HelpReferenceYouTube='https://www.youtube.com/@cfbcursos'
                  HelpReferenceLinkedin='https://linkedin.com/in/bruno-campos-191a1a41' 
                  helpReferenceDesc='Responsável por ministrar videos aulas/cursos de excelente qualidade de forma gratuí­ta via YouTube. Me ensinando inúmeras linguagens de programação (C++, C#, HTML, CSS, Javascript, Python, Node, React, React Native, Bootstrap. Sem dúvidas, umas das melhores didáticas que possa existir.

                  Também responsável por formar toda minha base de conhecimento em programação e sempre continuar ensiando coisas novas para nossa constante evoluíndo. Canal fundamental para qualquer estudante de desenvolvimento. '
               />
            </article>

            <article className="referenceItem flex column my-1 mx-2 border">
               <HelpReference 
                  helpReferenceName='Bruno Campos (CFB Cursos)'
                  HelpReferenceSite='http://cfbcursos.com.br' 
                  HelpReferenceInstagram='https://www.instagram.com/cfbcursos/'
                  HelpReferenceYouTube='https://www.youtube.com/@cfbcursos'
                  HelpReferenceLinkedin='https://linkedin.com/in/bruno-campos-191a1a41' 
                  helpReferenceDesc='Responsável por ministrar videos aulas/cursos de excelente qualidade de forma gratuí­ta via YouTube. Me ensinando inúmeras linguagens de programação (C++, C#, HTML, CSS, Javascript, Python, Node, React, React Native, Bootstrap. Sem dúvidas, umas das melhores didáticas que possa existir.

                  Também responsável por formar toda minha base de conhecimento em programação e sempre continuar ensiando coisas novas para nossa constante evoluíndo. Canal fundamental para qualquer estudante de desenvolvimento. '
               />
            </article>

            <article className="referenceItem flex column my-1 mx-2 border">
               <HelpReference 
                  helpReferenceName='Bruno Campos (CFB Cursos)'
                  HelpReferenceSite='http://cfbcursos.com.br' 
                  HelpReferenceInstagram='https://www.instagram.com/cfbcursos/'
                  HelpReferenceYouTube='https://www.youtube.com/@cfbcursos'
                  HelpReferenceLinkedin='https://linkedin.com/in/bruno-campos-191a1a41' 
                  helpReferenceDesc='Responsável por ministrar videos aulas/cursos de excelente qualidade de forma gratuí­ta via YouTube. Me ensinando inúmeras linguagens de programação (C++, C#, HTML, CSS, Javascript, Python, Node, React, React Native, Bootstrap. Sem dúvidas, umas das melhores didáticas que possa existir.

                  Também responsável por formar toda minha base de conhecimento em programação e sempre continuar ensiando coisas novas para nossa constante evoluíndo. Canal fundamental para qualquer estudante de desenvolvimento. '
               />
            </article>

            <article className="referenceItem flex column my-1 mx-2 border">
               <HelpReference 
                  helpReferenceName='Bruno Campos (CFB Cursos)'
                  HelpReferenceSite='http://cfbcursos.com.br' 
                  HelpReferenceInstagram='https://www.instagram.com/cfbcursos/'
                  HelpReferenceYouTube='https://www.youtube.com/@cfbcursos'
                  HelpReferenceLinkedin='https://linkedin.com/in/bruno-campos-191a1a41' 
                  helpReferenceDesc='Responsável por ministrar videos aulas/cursos de excelente qualidade de forma gratuí­ta via YouTube. Me ensinando inúmeras linguagens de programação (C++, C#, HTML, CSS, Javascript, Python, Node, React, React Native, Bootstrap. Sem dúvidas, umas das melhores didáticas que possa existir.

                  Também responsável por formar toda minha base de conhecimento em programação e sempre continuar ensiando coisas novas para nossa constante evoluíndo. Canal fundamental para qualquer estudante de desenvolvimento. '
               />
            </article> */}


         </div>
      </div>
   )
}