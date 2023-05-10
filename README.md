# Controle de Caixa

Projeto de Controle de Caixa inspirado em um Sistema de Caixa real no qual tive contato, onde deverá estar logado no sistema para utiliza-lo. 

O objetivo do projeto é fazer um sistema de login, criação de usuários para o sistema, cadastros de produtos, podendo fazer a edição dos mesmos, pesquisar sobre determinado produto podendo adiciona-lo na lista de compras. Contará com abertura e fechamento de caixa, informando os valores das vendas no dia.

*Este projeto que estou desenvolvendo será meu **Projeto Integrador** (projeto de finalização do meu curso Técnico em Informática). Abordando as seguintes qualificações:*

Qualificação | Especificação
------------ | -------------
**Planejamento de uma estruta para o cliente** | *Criar uma solução que atenta os requisitos estabelecido pelo cliente, estrutura, equipamentos, orçamento.*
**Planejar uma estrutura de Rede** | *Estabelecer conexão adequada para o funcionamento da rede.*
**Planejar rotinas de Backup** | *Realizar backups dos dados em determinado tempo, os armazenando em local seguro.*
**Planejar o Sistema** | *Desenvolver a prototipação do sistema, seguindo conceitos de designer e web designer.*
**Codar o Sistema** | *Desenvolver o sistema com uma linguagem de programação que atenda as necessidades do cliente. Escolha: Javascript.*
**Escolha da Stack** | *Javascript: Linguagem de alta velocidade e versátil. Com o uso de frameworks e/ou bibliotecas, possibilita o desenvolvimento da aplicação Web com React, o Mobile com React Native, o Desktop com Electron. Mesma linguagem base (JS) com algumas modificações na estrutura para atender o dispositivo que ira 'rodar o sistema'.*
**Banco de Dados** | *Utilizando Javascript podemos unir o Frontend da aplicação com o Backend utilizando Node. Escolhi usar a linguagem SQL para trabalhar em conjunto do Node.*
**Documentação do Sistema** | *Desenvolver o manual para utilização do sistema de forma correta.*

**Atualizações do Projeto:** *Login (gerando um token de acesso), cadastro, listagens de usuários e produtos, edição dos usuários e produtos, já estão funcionando junto do backend. A abertura de caixa funciona porém será modificada. Rotas de Backup definidas e funcionando, já se pode fazer o Backup dos dados.* 

## Stacks que serão utilizadas no Projeto

***Front-end:*** React, Node, Icones do FontAwesome, Axios, cores do Bootstrap, cores da UI Dark do Facebook.

***Back-end:*** Node, Express, Axios, JWT.

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

Clone o projeto
```bash
  git clone https://github.com/DouglasSuzukiDS/CashSystem.git
```

Entre na *pasta do projeto* em **dois *Terminais***
```bash
    cd CashSystem
```

Em um dos Terminais, entre na pasta ***Frontend***
```bash
    cd Frontend
```

No outro Terminal, entre na pasta ***Backend***
```bash
    cd Backend
```

Instale as dependências nas pastas do projeto, pasta ***Frontend*** e pasta ***Backend*** 
```bash
    yarn | npm install
```

## Criando o Banco de Dados *(utilizei o MySQL)*
*Seguindo a forma que eu fiz no MySQL Workbench*

```sql
    CREATE DATABASE cashSystem; /* => Criação do Banco de Dados no Sistema. */

    USE cashSystem; /* => Selecionar o BD para usar. */
```

## Criando a Tabela de Usuários
```sql
    CREATE TABLE users (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        userName VARCHAR(50) NOT NULL,
        userLogin VARCHAR(50) UNIQUE NOT NULL,
        userPassword VARCHAR(120) NOT NULL,
        userAdmin BOOLEAN DEFAULT false
    );
```

## Criando a Tabela de Produtos
```sql
    CREATE TABLE products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        pdt_name VARCHAR(50) UNIQUE NOT NULL ,
        pdt_price DECIMAL(10, 2) NOT NULL,
        pdt_type VARCHAR(50) NOT NULL,
        pdt_qty INT NOT NULL
    );
```
## Criando a Tabela das Vendas do dia
```sql
    CREATE TABLE SaleDay (
        idSale INT PRIMARY KEY AUTO_INCREMENT,
        priceSale DECIMAL(10, 2),
        sellerSale VARCHAR(50),
        methodSale VARCHAR(20),
        registrationSale VARCHAR(20)
    );
```
## Criando a Tabela de Todas as Vendas
```sql
    CREATE TABLE Sales(
        idSale INT PRIMARY KEY AUTO_INCREMENT,
        dateSale VARCHAR(30) NOT NULL,
        sellerSale VARCHAR(50) NOT NULL,
        openCash DECIMAL (10, 2) NOT NULL,
        totalSale DECIMAL (10, 2) NOT NULL,
        openSystem VARCHAR(50) NOT NULL,
        closeSystem VARCHAR(50) NOT NULL,
        moneySale DECIMAL (10, 2) NOT NULL,
        pixSale DECIMAL (10, 2) NOT NULL,
        debitSale DECIMAL (10, 2) NOT NULL,
        creditSale DECIMAL (10, 2) NOT NULL,
        cardsSale DECIMAL (10, 2) NOT NULL,
        bankSale DECIMAL (10, 2) NOT NULL
    );
```

## Variáveis de Ambiente
Como normas em qualquer lugar onde se contem senhas, a proteção deles devem ser ***protegidas*** pelo menos minimamente. Para isso no projeto usamos variáveis de ambiente. Onde as senhas devem ser mantidas em um arquivo ***.env***. As váriaveis são as seguintes:

```env
    DB_HOST = 'Onde a aplicação está rodando' (por hora em 'localhost').

    DB_USER = 'USUÁRIO' (usuário para acesso ao Banco de Dados, no meu caso 'root').

    DB_PASSWORD = 'Sua senha do Bando de Dados'

    DB_DATABASE = 'CashSystem' (nome do banco que você criou).

    SECRET = 'Sua chave criptografica'.
```

## Iniciando o Projeto

Depois de instalados as dependências nas pastas ***Frontend*** e ***Backend*** inicie os servidores nas suas respectivas pastas.

Na pasta ***Frontend***: 
```bash
    yarn start | npm start
```

Na pasta ***Backend***: 
```bash
    yarn run server | npm run server
```

## Rotas no Frontend 
*Lembrando que a ideialização das rotas até o momento é para facilitar minha visualização no desenvolvimento. Futuramente irei buscar bloquear acesso direto a elas pela URL, sendo permitido apenas acesso por ações na aplicação principal, obviamente logo após autenticação.*
Rota | Função
-----|-------
**/login** | *Página Inicial para o colaborar se identificar, para poder ter acesso ao sistema.*
**/**   | *Aplicação principal após de logado e autenticado.*
**/opencash** | *Modal de Abertura de caixa. O caixa deve ser aberto somento após informar o valor/saldo($$) inicial para o dia. Em outras palavras, informar o valor que tem para ser usado como 'troco'.*
**/registerNewUser** | *Página/Modal (não decidi ainda) para cadastro de novos colaboradores.*
**/findUsers** | *Modal para verificar usuários do sistema.* *(Falta a implementação)*
**/edit/user/:id** | *Faz a busca do usuário pelo ID. Será usado para fazer a edição dos dados do colaborador.* *(Falta a implementação)*
**/registerNewProduct** | *Página/Modal (não decidi ainda) para cadastro de novos produtos.*
**/findProducts** | *Modal para procurar e/ou adicionar produto a lista de compras.*
**/edit/product/:id** | *Faz a busca do produto pelo ID. Será usado para fazer a edição do produto.*
**/invoicing** | *Modal informativo com o valor das vendas por meio de pagamento, entre dinheiro, cartões e pix.*
**/closing** | *Modal informativo com o valor das vendas do dia, em dinheiro e o valor que foi para a conta bancário.*
**/*** | *Qualquer outra rota diferente dessas informadas, será mostrado o componente de Erro.*

## Rotas no Backend
*Lembrando que as rotas até o momento estão dessa maneira e possivelmente podem ser modificadas e/ou acrescentadas novas rotas conforme a necessidade do projeto.*

#### Rotas utilizadas para ações das funcionalidades dos usuários

Metodo | Rota | Função
------ | ---- | ------ 
**GET** | **/users** | *Lista todos os Usuários.*
**GET** | **/user/:id** | *Busca o usuário pelo seu ID.*
**POST** | **/login** | *Faz o login no sistema.*
**POST** | **/registerNewUser** | *Faz o registro de um novo colaborador.*
**PUT** | **/edit/user/:id** | *Busca o usuário pelo ID para fazer a edição dos dados.*
**DELETE** | **/delete/user/:id** | *Deleta o colaborador pelo seu ID.*

#### Rotas utilizadas para ações das funcionalidades dos produtos

Metodo | Rota | Função
------ | ---- | ------ 
**GET** | **/products** | *Lista todos os Produtos.*
**GET** | **/product/:id** | *Busca o produto pelo seu ID.*
**GET** | **/products/type** | *Lista os produtos pelo seu tipo.*
**POST** | **/registerNewProduct** | *Faz o registro de um novo produto.*
**PUT** | **/edit/product/:id** | *Busca o produto pelo ID para fazer a edição dos dados.*
**DELETE** | **/delete/product/:id** | *Deleta o produto pelo seu ID.*

#### Rotas utilizadas para ações das funcionalidades das Vendas do Dia

Metodo | Rota | Função
------ | ---- | ------ 
**GET** | **/saleDayList** | *Lista todos as vendas do dia.*
**POST** | **/newSale** | *Rota para salvar a venda.*
**DELETE** | **/deleteSalesDay** | *Deleta as vendas dia.*

#### Rotas utilizadas para ações das funcionalidades das Vendas em Geral

Metodo | Rota | Função
------ | ---- | ------ 
**GET** | **/allSales** | *Lista todos as vendas no geral.*
**GET** | **/backupSalesDay** | *Rota para fazer backup.*
**POST** | **/closeSystem** | *Rota para salvar o Backup quando fechar o caixa.*

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