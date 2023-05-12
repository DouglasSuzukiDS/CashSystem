# Frontend do Projeto Controle de Caixa
Documentação do ***Frontend*** do Projeto ***Controle de Caixa***.

## Stacks que serão utilizadas no Frontend Projeto

***Front-end:*** React, Node, Icones do FontAwesome, Axios, cores do Bootstrap, cores da UI Dark do Facebook. *(Em desenvolvimento)*

## Referências
 - [**Cores e algumas formatações do Bootstrap**](https://getbootstrap.com)
 - [**FontAwesome**](https://fontawesome.com)
 - [**Página de Identificação**](https://awesomeopensource.com/project/elangosundar/awesome-README-templates) *- Desenvolvido por Md Irshad Ansari (Todos direitos reservados ao criador da UI)*
 - [**Canal de Md Irshad Ansari no YouTube**](https://www.youtube.com/c/OnlineTutorials4Designers)
 - [**CFB Cursos**](https://www.youtube.com/@cfbcursos)
 - [**Bonieky Lacerda (B7WEB)**](https://b7web.com.br/fullstack/)
 - [**Vitor Cunha**](https://www.youtube.com/@VitorCunhaCode)
 - [**Huriel**](https://www.youtube.com/@huriel)
 - [**Mathues Battisti**](https://www.youtube.com/@matheusbattisti)
 - [**Joao Ribeiro**](https://www.youtube.com/@JLDRPT)
 - [**Jovem Programador**](https://www.youtube.com/@JovemProgramadorOficial)
 - [**Prof. Daniel**](https://www.linkedin.com/in/daniel-ferreira-2922aa48/)
 - [**Prof. Marcos**](https://www.linkedin.com/in/marcos-vin%C3%ADcius-mota-a907911a)
 - [**Prof. Jocastra**](https://br.linkedin.com/in/jocastra-queiroz-6178a133)
 - [**Prof. Viviane**](https://br.linkedin.com/in/vivianelf)
 - [**Prof. Alex**](https://www.linkedin.com/in/alexsander-reis-11933415b/)

 ## Instalação e iniciando o Projeto

Clone o projeto.
```bash
  git clone https://github.com/DouglasSuzukiDS/CashSystem.git
```

Entre na *pasta do projeto* no ***Terminal***.
```bash
    cd CashSystem
```
No Terminal, entre na pasta ***Frontend*** *(Em desenvolvimento)*
```bash
    cd Frontend
```
.
Instale as dependências nas pastas do projeto, pasta ***Frontend*** 
```bash
    yarn | npm install
```

## Iniciando o Projeto

Depois de instalados as dependências nas pastas ***Frontend***  inicie o servidor na sua respectiva pasta.

Na pasta ***Frontend***: 
```bash
    yarn start | npm start
```

## Rotas no Frontend 
*No Frontend após o término do projeto, foi necessário deixar apenas essas três rotas, uma para o login, uma para a aplicação principal e outra para caso o usuário digite uma rota qualquer.*

Rota | Função
-----|-------
**/**   | *Página inicial para o colaborar se identificar, para poder ter acesso ao sistema.*
**/opensystem** | *Página principal da aplicação, através dela que todas as funcionalidades do sistema serão executados.*
**/anything*** | *Qualquer outra rota diferente dessas informadas, será mostrado o componente de Erro.*

## Tipografia, Estilizações, Cores & Botões 
Para agilizar meu processo de estilizações em meus projetos, eu opto sempre em inserir neles algumas formações padrões atraves de classes e/ou variáveis, seguindo a ideia do Bootstrap. 

### Tipografia
Tenho uma preferência em particular pela fonte ***JetBrains Mono***. Para esse projeto também optei por utiliza-la por ser um fonte opensource, monospace, sans-serif. 

A fonte pode ser baixada pelo site oficial: 
- [***JetBrains Mono - Site Oficial***](https://www.jetbrains.com/pt-br/lp/mono/)

Ou também baixada / importada do Google Fonts
- [***JetBrains Mono - Google Fonts***](https://fonts.google.com/specimen/JetBrains+Mono?query=Jet)

### Estilizações
Na pasta Frontend do projeto, existe uma pasta chamada ***scss***, onde eu coloco as estilizações que poderam ser utilizadas em qualquer parte do projeto, sendo *'global'*. Dentro dessa pasta, existe os seguintes arquivos:

- **_align.scss** => Arquivo responsável pelas classes de alinhamentos.
- **_button.scss** => Arquivo responsável pelas classes de formações de botões. As formações são semelhantes/iguais as formações do [***Bootstrap***](https://getbootstrap.com/docs/5.2/components/buttons/#examples).
- **_colors.scss** => Arquivo responsável pelas classes/variáveis de utilização de cores, seja em elementos ou em textos.
- **_global.scss** => Arquivo responsável pelas classes de intuíto global, como por exemplo o reset de *margin* e *padding*, classes de bordas para auxiliar em localizar elementos.
- **_spacing.scss** => Arquivo responsável pelas classes de espaçamentos, *margin* e *padding* nas quatro direções ou só, no top, right, bottom ou left. 
- **_tipography.scss** => Arquivo responsável pelas classes de configurações de fonte.

### Cores
Como mencionado acima nas estilizações, o arquivo **_colors.scss** conta com cores/variáveis que serão utilizadas no projeto. Mas não só isso, já deixo outras cores/variáveis configuradas para que se necessário já possa ser utilizada.

### Cores Auxiliares
Cores auxiliares utilizadas no sistema, normalmente apenas para dar um destaque. 

**Cor** | **Nome da Variável**| **Hexadecimal** | **RGB**
-------------------- | ------- | --------------- | --------
![Dark-Blue](https://i.imgur.com/LGhhTqe.png) | ***Dark Blue*** | ***#081C65*** | ***(8, 28, 101)***
![Yellow-ML](https://i.imgur.com/iBd1Bv6.png) | ***Yellow - ML*** | ***#F9D001*** | ***(249, 208, 1)***
![Blue-MP](https://i.imgur.com/6C8TES4.png) | ***Blue - MP*** | ***#13ADDF*** | ***(19, 173, 223)***
![Orange-In](https://i.imgur.com/1VEzRoM.png) | ***Orange-In*** | ***#FF7A01*** | ***(255, 122, 1)***
![Pix](https://i.imgur.com/yiqT8p2.png) | ***Pix*** | ***#2EBDAF*** | ***(46, 189, 175)***
![Violet-Nu](https://i.imgur.com/XYLH1N7.png) | ***Violet-Nu*** | ***#331659*** | ***(51, 22, 89)***

### Cores Auxiliares para a UI Dark
Cores auxiliares utilizadas para dar 'apoio' a UI Dark. Essas cores foram retiradas da UI Dark do [***Facebook***](https://www.facebook.com/).

**Cor** | **Nome da Variável**| **Hexadecimal** | **RGB**
------- | ------- | --------- | --------------- | 
![FB1](https://i.imgur.com/I04GWDR.png) | ***FB1*** | ***#18191A*** | ***(24, 25, 26)***
![FB2](https://i.imgur.com/iPNJoYu.png) | ***FB2*** | ***#242526*** | ***(36, 37, 38)***
![FB3](https://i.imgur.com/m9krluV.png) | ***FB3*** | ***#3A3A3C*** | ***(58, 58, 60)***
![FB4](https://i.imgur.com/YkWGg4e.png) | ***FB4*** | ***#4E4F50*** | ***(78, 79, 80)***
![FB5](https://i.imgur.com/2IJQ7kZ.png) | ***FB5*** | ***#E6DCD6*** | ***(230, 220, 214)***
![FB6](https://i.imgur.com/uUuYEbo.png) | ***FB6*** | ***#B8BBBF*** | ***(184, 187, 191)***
![FB7](https://i.imgur.com/8tZt7k6.png) | ***FB7*** | ***#E7E9EC*** | ***(231, 233, 236)***


### Cores de Background
Cores que reservei para o background da aplicação.

**Cor** | **Nome da Variável**| **Hexadecimal** | **RGB**
------- | ------- | --------------- | --------- | 
![BG - Light](https://i.imgur.com/ymH4NsH.png) | ***BG-Light*** | ***#979999*** | ***(151, 153, 153)***
![BG - Normal](https://i.imgur.com/sImzjaS.png) | ***BG-Normal*** | ***#5C5E5F*** | ***(92, 94, 95)***
![BG - Dark](https://i.imgur.com/9GBwCUS.png) | ***BG-Dark*** | ***#202225*** | ***(32, 34, 37)***

### Cores para os Textos
Cores definidas para se utilizar em textos para dar contraste com o background que será sempre de uma tonalidade mais escura.

**Cor** | **Nome da Variável**| **Hexadecimal** | **RGB**
------- | ------- | --------------- | --------- | 
![Text](https://i.imgur.com/bU4JtXp.png) | ***Text*** | ***#C1C7E0*** | ***(193, 199, 224)***
![Text2](https://i.imgur.com/VREoDUo.png) | ***Text2*** | ***#9A9FB3*** | ***(154, 159, 179)***
![Text3](https://i.imgur.com/BcpkIYp.png) | ***Text3*** | ***#7D8192*** | ***(125, 129, 146 )***

### Cores para variações do Ciano
Cores reservadas de variações do ciano, no qual tem o objetivo de ser a cor destaque da aplicação.

**Cor** | **Nome da Variável**| **Hexadecimal** | **RGB**
------- | ------- | --------- | --------------- | 
![Cyan - Light](https://i.imgur.com/IjuF7Bn.png) | ***Cyan-Light*** | ***#42E7F2*** | ***(66, 231, 242)***
![Cyan - Normal](https://i.imgur.com/nmyjCAL.png) | ***Cyan-Normal*** | ***#3EDBE6*** | ***(62, 219, 230)***
![Cyan - Dark](https://i.imgur.com/pUxDIsJ.png) | ***Cyan-Dark*** | ***#3BCFD9*** | ***(59, 207, 217)***
![Info - Light](https://i.imgur.com/h83MXLi.png) | ***Info-Light*** | ***#0CB6D8*** | (***12, 182, 216)***
![Info - Dark](https://i.imgur.com/LtioqLT.png) | ***Info-Dark***| ***#0BACCC*** | ***(11, 172, 204)***

### Botões
Gosto da agilidade do [***Bootstrap***](https://getbootstrap.com/docs/5.2/components/buttons/#examples) então em todos os meus projetos, caso seja necessário inserir botões, eu opito por utiliza as formações por já serem projetadas para ser agradável ao usuário. 

**Botão** | **Hexadecimal** | **Decimal (RGB)** | **Cor do Texto**
----- | ----------- | ------- | ------------ 
![Primary](https://i.imgur.com/JiugMIO.png) | **#0D6EFD** | **(13, 110, 253)** | **#C1C7E0**
![Primary Hover](https://i.imgur.com/KXA8ufE.png) | **#0B5ED7** | **(11, 94, 215)** | **#C1C7E0**
![Secondary](https://i.imgur.com/IVSBPK8.png) | **#6C757D** | **(108, 117, 125)** | **#C1C7E0**
![Secondary Hover](https://i.imgur.com/7zpeAvI.png) | **#5C636A** | **(92, 99, 106**) | **#C1C7E0**
![Success](https://i.imgur.com/oB1S3lB.png) | **#198754** | **(25, 135, 84)** | **#C1C7E0**
![Success Hover](https://i.imgur.com/jtc6UC6.png) | **#157347** | **(21, 115, 71)** | **#C1C7E0**
![Danger](https://i.imgur.com/ktjTm2y.png) | **#DC3545** | **(220, 53, 69)** | **#C1C7E0**
![Danger Hover](https://i.imgur.com/Wpzb1aI.png) | **#BB2D3B** | **(187, 45, 59)** | **#C1C7E0**
![Warning](https://i.imgur.com/iTH8rkr.png) | **#FFC107** | **(255, 193, 7)** | **#202225**
![Warning Hover](https://i.imgur.com/4mvhARC.png) | **#FFCA2C** | **(255, 202, 44)** | **#202225**
![Info](https://i.imgur.com/23SCHsM.png) | **#0DCAF0** | **(13, 202, 240)** | **#202225**
![Info Hover](https://i.imgur.com/PKOMBPO.png) | **#32D2F2** | **(50, 210, 242)** | **#202225**
![Light](https://i.imgur.com/Qi2u9EB.png) | **#F8F9FA** | **(248, 249, 250)** | **#202225**
![Light Hover](https://i.imgur.com/IstB9e5.png) | **#F9FAFB** | **(249, 250, 251)** | **#202225**
![Dark](https://i.imgur.com/PJJHllf.png) | **#212529** | **(33, 37, 41)** | **#C1C7E0**
![Dark Hover](https://i.imgur.com/IdLHKyH.png) | **#1C1F23** | **(28, 31, 35)** | **#C1C7E0**