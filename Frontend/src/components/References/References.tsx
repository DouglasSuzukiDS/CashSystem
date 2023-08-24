import { HelpReference } from "../HelpReference/HelpReference";

import { ActionsType } from "../../types/ActionsType";

import { HandshakeRussian } from "../../assets/Icons/HandshakeRussian";
import { RussianFlag } from "../../assets/Icons/RussianFlag";
import { XMark } from "../../assets/Icons/XMark";

export const References = ({ close }: ActionsType) => {
   return (
      <div className="containerReferences flex sbt column ml-3">
         <h4 className="flex sbt w-100">
            <div className="flex text-info w-100">
               <p className="text-russian-gradient">Ajuda e Referências </p>
               <HandshakeRussian w='50' h='24' className='ml-1' />
               <RussianFlag w="30" h="24" />
            </div>

            <div className="referencesClose flex pointer opacity">
               <XMark w='24' h='24' className='' onClick={close} />
            </div>
         </h4>

         <div className="references flex column mt-2 border">
            <span>
               {/* CFB Cursos */}
               <article className="referenceItem flex column my-2 mx-2 border">
                  <HelpReference
                     referenceName='Bruno Campos (CFB Cursos)'
                     referenceSite='http://cfbcursos.com.br'
                     referenceInstagram='https://www.instagram.com/cfbcursos/'
                     referenceYouTube='https://www.youtube.com/@cfbcursos'
                     referenceLinkedin='https://linkedin.com/in/bruno-campos-191a1a41'
                     referenceDesc='Responsável por ministrar videos aulas/cursos de excelente qualidade de forma gratuí­ta via YouTube. Me ensinando inúmeras linguagens de programação (C++, C#, HTML, CSS, Javascript, Python, Node, React, React Native, Bootstrap. Sem dúvidas, umas das melhores didáticas que possa existir.

                     Também responsável por formar toda minha base de conhecimento em programação e sempre continuar ensiando coisas novas para nossa constante evoluíndo. Canal fundamental para qualquer estudante de desenvolvimento. Membro da elite da TI.'
                  />
               </article>

               {/* Bonieky */}
               <article className="referenceItem flex column my-2 mx-2 border">
                  <HelpReference
                     referenceName='Bonieky Lacerda (B7WEB)'
                     referenceSite='https://b7web.com.br/fullstack/'
                     referenceInstagram='https://www.instagram.com/bonieky/'
                     referenceYouTube='https://www.youtube.com/@bonieky'
                     referenceDesc='Produtor de um excelente curso, que na verdade são formados por pacotes de cursos para tornar transformar pessoas em desenvolvedores fullstack, WEB e Mobile. Didatica  incrí­vel, também uma das melhores que possa existir. Possui videos aulas em seu canal do YouTube que vão comprovar a qualidade da sua didatica e ví­deos sobre o mundo do desenvolvimento.'
                  />
               </article>

               {/* Lucas e Alessandro */}
               <article className="referenceItem flex column m-2 border">
                  <HelpReference
                     referenceName='Lucas e Alessandro (Suporte B7WEB)'
                     referenceSite='https://b7web.com.br/fullstack/'
                     referenceDesc='Membros do suporte do curso da B7WEB. Profissionais que buscam ajudar os alunos da melhor forma que podem. 
                  Agradecimento especial ao Lucas que venho me ajudando no entendimento e desenolvimento do meu projeto. Sem sua ajuda, talvez o processo de desenvolvimendo do projeto poderia ser muito maior.'
                  />
               </article>

               {/* Vitor Cunha */}
               <article className="referenceItem flex column m-2 border">
                  <HelpReference
                     referenceName='Vitor Cunha'
                     referenceYouTube='https://www.youtube.com/@VitorCunhaCode'
                     referenceLinkedin='https://www.linkedin.com/in/vitorlostada/'
                     referenceDesc='Responsável por ensinar como eu faria um CRUD utilizando React com Node e MySQL, justamente o que precisava aprender para desenvolver meu primeiro CRUD (que eu mesmo desenvolvi). Mostrando também que é possivel unir React com Electron. Sua didatica também é excelente, extremamente simples, rápida e direta.'

                     referenceLabelLink01="Crud utilizando React Js, Node e MySQL (simples) pt.1"
                     referenceLink01="https://www.youtube.com/watch?v=e0He6sCiQT8"

                     referenceLabelLink02="Crud utilizando React Js, Node e MySQL (simples) pt.2"
                     referenceLink02="https://www.youtube.com/watch?v=5_9rvyT9cg4"

                     referenceLabelLink03="Crud utilizando React Js, Node e MySQL (simples) pt.3"
                     referenceLink03="https://www.youtube.com/watch?v=vzPsUWLprAw"

                     referenceLabelLink04="Página de Login e Cadastro utilizando React Js, Node e MySQL (Simples)"
                     referenceLink04="https://www.youtube.com/watch?v=F_mXVI8Dalg"
                     
                  />
               </article>

               {/* Huriel */}
               <article className="referenceItem flex column m-2 border">
                  <HelpReference
                     referenceName='Huriel'
                     referenceInstagram='https://www.instagram.com/huri3l'
                     referenceYouTube='https://www.youtube.com/@huriel'
                     referenceLinkedin='https://linkedin.com/in/huri3l'
                     referenceDesc='Responsável por realizar um fantastica playlist buscando explicar o uso e conceitos de todos os Hooks do React. Também possí­veis outros ví­deos em seu canal do youtube buscando ensinar ferramentas/recursos para impulsonar o desenvolvimento frontend. Não é atoa que sua capa do YouTube contem a frase "Impulsionando Desenvolvedores". Sua didática é excelente, busca explicar todo o conceito de forma simples e objetiva.'

                     referenceLabelLink01="Aprenda os React Hooks!"
                     referenceLink01="https://www.youtube.com/playlist?list=PL8YNlUoOZkkaCJENGzHFXrRwwjuwEh6nC"
                  />
               </article>

               {/* Matheus Battisti */}
               <article className="referenceItem flex column m-2 border">
                  <HelpReference
                     referenceName='Matheus Battisti (Hora de Codar)'
                     referenceSite='https://horadecodar.com.br'
                     referenceInstagram='https://www.instagram.com/HoraDeCodar'
                     referenceYouTube='https://www.youtube.com/@matheusbattisti'
                     referenceLinkedin='https://linkedin.com/in/matheusbattisti'
                     referenceDesc='Responsável por ministrar excelentes aulas via YouTube e cursos via Udemy / Plataforma Hora de Codar. Fui aluno do curso de Javascript na Udemy, onde pude comprovar sua excelencia no ensino, dando suporte no decorrer dos estudos. Possui um site/blog com artigos/tutoriais de programação.
                  Me salvou inúmeras vezes atravez das suas aulas/site/blog. Alguma dúvida de como usar algum recurso em Javascript? O Matheus talvez possa ter algum conteúdo para te salvar.'

                  referenceLabelLink01="Como salvar um objeto na localStorage"
                  referenceLink01="https://horadecodar.com.br/2020/07/21/como-salvar-um-objeto-na-localstorage/"
                  />
               </article>

               {/* João Ribeiro */}
               <article className="referenceItem flex column m-2 border">
                  <HelpReference
                     referenceName='João Ribeiro'
                     referenceSite='https://www.udemy.com/course/desenvolvimento-web-compacto-e-completo'
                     referenceYouTube='https://www.youtube.com/@JLDRPT'
                     referenceDesc='Pra ser bem sincero, ví­ apenas alguns ví­deos dele, mas é notável que sua didatica também é incrivel, simples e direta. Recentemente publicou um curso de Desenvolvimento Web na Udemy e plo o que vi da sua grade é muito rica.'

                     referenceLabelLink01="ReactJS (playlist)"
                     referenceLink01="https://www.youtube.com/playlist?list=PLXik_5Br-zO9YVs9bxi7zoQlKq59VPTX1"
                  />
               </article>

               {/* Jovem Programador */}
               <article className="referenceItem flex column m-2 border">
                  <HelpReference
                     referenceName='Rodrigo (Jovem Progamador)'
                     referenceInstagram='https://www.instagram.com/rodrigolucas322'
                     referenceYouTube='https://www.youtube.com/@JovemProgramadorOficial'
                     referenceDesc='Descobri o canal dele a pouco tempo buscando entender, aprender como desenvolver um Carrinho de Compras, utilizando React Hooks e desenvolver o sistema de Login.'

                     referenceLabelLink01=" Crianto tela de Login com React - CodeEx #08"
                     referenceLink01="https://www.youtube.com/watch?v=Bm50j2CqCXg&ab_channel=JovemProgramador"

                     referenceLabelLink02="Criando tela de Cadastro com ReactJS - CodeEx #14"
                     referenceLink02="https://www.youtube.com/watch?v=tKYezizR39I&ab_channel=JovemProgramador"

                     referenceLabelLink03="Fluxo de Autenticação com Typescript e JWT"
                     referenceLink03="https://www.youtube.com/watch?v=WKMnsBnfOFc&list=PLqfQXYWB7zoZPoo7LsSqUSqgRsBXQOQ6y&index=35"

                     referenceLabelLink04="Fluxo de Autenticação com React e Context API"
                     referenceLink04="https://www.youtube.com/watch?v=MH2MO9eivoc&list=PLqfQXYWB7zoZPoo7LsSqUSqgRsBXQOQ6y&index=36"
                  />
               </article>

               {/* Prof. Daniel  */}
               <article className="referenceItem flex column m-2 border">
                  <HelpReference
                     referenceName='Prof. Daniel'
                     referenceInstagram='https://www.instagram.com/danielferreira_black/'
                     referenceLinkedin='https://www.linkedin.com/in/daniel-ferreira-2922aa48/'
                     referenceDesc='Sempre buscando ministrar suas aulas de formas de forma simples, um excelente docente. Sempre buscando dar exemplos de casos reais no meio corporativo ou então pessoal. No meio corporativo/autonomo pelo pouco que conheci, deve ser um profissional excepcional, altamente qualificado, e arrisco a dizer, um membro da elita na TI. Responsável por deixar duas frases importantes:'

                     referencePhrase01='1º) Tratar gente igual gente.'

                     referencePhrase02='2º) Muitas vezes o cliente vai falar que o equipamente que ele tem é uma coisa, e você terá que concordar pra nío ficar sem o emprego.'
                  />
               </article>

               {/* Prof. Marcos */}
               <article className="referenceItem flex column m-2 border">
                  <HelpReference
                     referenceName='Prof. Marcos'
                     referenceSite='https://www.mvmota.com/'
                     referenceLinkedin='https://www.linkedin.com/in/marcos-vin%C3%ADcius-mota-a907911a'
                     referenceDesc='Didatica excelente, sempre tentando deixar a aula sem clima de aula, um docente exemplar. Os exemplos mencionados em aula então ... Tive pouco contato com ele, mas é sem dúvida alguma um profissional excepcional, altamente qualificado, e arrisco a dizer, um outro membro da elita na TI.'
                  />
               </article>

               {/* Prof. Jocastra */}
               <article className="referenceItem flex column m-2 border">
                  <HelpReference
                     referenceName='Prof Jocastra'
                     referenceLinkedin='https://br.linkedin.com/in/jocastra-queiroz-6178a133'
                     referenceDesc='Tive pouco contato com ela, mas é perceptivel seu alto conhecimento, excelente profissionalismo e didática. Com certeza está na elite dos profissionais da TI. Na certa, precisa de estrutura de rede? Ela deve estar no topo da sua lista para executar a sua rede. Marcos e Jocastra foram responsáveis por ministrar aulas de redes, apesar de na sinceridade não ser meu forte, há uma frase que ambos deixaram gravados em minha mente:'

                     referencePhrase01='Tá, mais cadê o Backup dos dados? Backup inserido no projeto com sucesso. 😎'
                  />
               </article>
               
               {/* Prof. Viviane */}
               <article className="referenceItem flex column m-2 border">
                  <HelpReference
                     referenceName='Prof. Viviane'
                     referenceLinkedin='https://br.linkedin.com/in/vivianelf'
                     referenceDesc='Tive pouco contato, porém a sensação que pelo menos eu tive, é que também é uma excelente profissional. Tive um problema na implementação do JWT na minha aplicação, pedi auxilio e assim que ela viu o erro me disse "deixa eu ver meu arquivo .env, olha acredito que o problema esta nessa variavel secret". Cheguei em casa e era justamente nessa variavel no arquivo .env, simplesmente coloquei um "#" no começo do valor da variavel que comentou todo o restante da linha, no caso deixando a variavel secret (usada para codificação do JWT) sem valor. Me poupou muito tempo tentando descubrir o problema. 🤣'
                  />
               </article>

               {/* Prof. Alex */}
               <article className="referenceItem flex column m-2 border">
                  <HelpReference
                     referenceName='Prof. Alex'
                     referenceLinkedin='https://www.linkedin.com/in/alexsander-reis-11933415b/'
                     referenceDesc='Profissional excepcional, sempre buscando ajudar da melhor forma possível. Deixando aula sem clima de aula, onde todo mundo aprendia um com o outro a cada contato que tinhamos. Me auxiliou no entendimento de lógica/fundamentos da programação, banco de dados, designer, estrutura de software sua documentação. Também membro da elite em TI. Além de todo conhecimento e aprendizado compartilhado, uma das falas que fez uma marca em nossa turma:'

                     referencePhrase01='#UNIÃO - Você não está sozinho!'
                  />
               </article>
               
               {/* Prof. Mariana */}
               <article className="referenceItem flex column m-2 border">
                  <HelpReference
                     referenceName='Prof. Mariana'
                     referenceLinkedin='https://br.linkedin.com/in/mariana-badu-896627198'
                     referenceDesc='Sempre se propondo ajuda, orientando, motivando e cobrando quando necessário.'
                     referencePhrase01="#SaiaDaProcrastinação"
                  />
               </article>

               {/* <article className="referenceItem flex column m-2 border">
                  <HelpReference
                     referenceName='Bruno Campos (CFB Cursos)'
                     referenceSite='http://cfbcursos.com.br'
                     referenceInstagram='https://www.instagram.com/cfbcursos/'
                     referenceYouTube='https://www.youtube.com/@cfbcursos'
                     referenceLinkedin='https://linkedin.com/in/bruno-campos-191a1a41'
                     referenceDesc='Responsável por ministrar videos aulas/cursos de excelente qualidade de forma gratuí­ta via YouTube. Me ensinando inúmeras linguagens de programação (C++, C#, HTML, CSS, Javascript, Python, Node, React, React Native, Bootstrap. Sem dúvidas, umas das melhores didáticas que possa existir.

                  Também responsável por formar toda minha base de conhecimento em programação e sempre continuar ensiando coisas novas para nossa constante evoluíndo. Canal fundamental para qualquer estudante de desenvolvimento. '
                  />
               </article> */}
            </span>

         </div>
      </div>
   )
}