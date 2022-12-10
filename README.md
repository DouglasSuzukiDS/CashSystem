# Controle de Caixa

Projeto de Controle de Caixa inspirado em um Sistema de Caixa real no qual tive contato, no qual deverá estar logado no sistema para utiliza-lo. 

O objetivo do projeto é fazer um sistema de login, criação de usuários para o sistema, cadastros de produtos, podendo fazer a edição dos mesmos, pesquisar sobre determinado produto podendo adiciona-lo na lista de compras. Contará com abertura e fechamento de caixa, informando os valores das vendas no dia.

*Este projeto que estou desenvolvendo será meu **Projeto Integrador** (projeto de finalização do meu curso Técnico em Informática). Abordando as seguintes qualificações:*

Qualificação | Expecificação
------------ | -------------
**Planejamento de uma estruta para o cliente** | *Criar uma solução que atenta os requisitos estabelicidos pelo cliente, estrutura, equipamentos, orçamento.*
**Planejar uma estrutura de Rede** | *Estabelecer conexão adequada para o funcionamento da rede.*
**Planejar rotinas de Backup** | *Realizar backups dos dados em determinado tempo, os armazenando em local seguro.*
**Planejar o Sistema** | *Desenvolver a prototipação do sistema, seguindo conceitos de designer e web designer.*
**Codar o Sistema** | *Desenvolver o sistema com uma linguagem de programação que atenda as necessidades do cliente. Escolha: Javascript.*
**Escolha da Stack** | *Javascript: Linguagem de alta velocidade e versátil. Com o uso de frameworks e/ou bibliotecas, possíbilita o desenvolvimento da aplicação Web com React, o Mobile com React Native, o Desktop com Electron. Mesma linguagem base (JS) com algumas modificações na estrutura para atender o dispositivo que ira 'rodar o sistema'.*
**Banco de Dados** | *Utilizando Javascript podemos unir o Frontend da plaicação com o Backend utilizando Node e escolhi usar a linguagem SQL para trabalhar em conjunto do Node.*
**Documentação do Sistema** | *Desenvolver o manual para utilização do sistema de forma correta.*

**Atualizações do Projeto:** *Login (gerando um token de acesso), cadastro, listagens de usuários e produtos, edição de produtos, já estão funcionando junto do backend. A abertura de caixa funciona porém será modificada.* 

## Stacks que serão utilizadas no Projeto

***Front-end:*** React, Node, Icones do FontAwesome, Axios, cores do Bootstrap. *(Em desenvolvimento)*

***Back-end:*** Node, Express, Axios, JWT. *(Em desenvolvimento)*


## Referências

 - [Cores e algumas formatações do Bootstrap](https://getbootstrap.com)
 - [FontAwesome](https://fontawesome.com)
 - [Página de Identificação](https://awesomeopensource.com/project/elangosundar/awesome-README-templates) *- Desenvolvido por Md Irshad Ansari (Todos direitos reservados ao criador da UI)*
 - [Canal de Md Irshad Ansari no YouTube](https://www.youtube.com/c/OnlineTutorials4Designers)
## Instalação e iniciando o Projeto

Clone o projeto
```bash
  git clone https://github.com/DouglasSuzukiDS/CashSystem.git
```

Entre na *pasta do projeto* em **dois *Terminais***
```bash
    cd CashSystem
```

Em um dos Terminais, entre na pasta ***Frontend*** *(Em desenvolvimento)*
```bash
    cd Frontend
```

No outro Terminal, entre na pasta ***Backend*** 
```bash
    cd Backend
```

Instale as dependências nas pastas do projeto, pasta ***Frontend*** e pasta ***Backend*** 
```bash
    yarn add | npm install
```

## Criando o Banco de Dados *(utilizei o MySQL)*
*Seguindo a forma que eu fiz no MySQL Workbench*

```bash
    CREATE DATABASE cashSystem; => Criação do Banco de Dados no Sistema.

    USE cashSystem; => Selecionar o BD para usar.
```

## Criando a Tabela de Usuários
```sql
    CREATE TABLE users (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        userName VARCHAR(50) NOT NULL,
        userLogin VARCHAR(50) NOT NULL,
        userPassword VARCHAR(50) NOT NULL,
        userAdmin BOOLEAN DEFAULT false
    );
```

## Criando a Tabela de Produtos
```sql
    CREATE TABLE products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        pdt_name VARCHAR(50) NOT NULL,
        pdt_price DECIMAL NOT NULL,
        pdt_type VARCHAR(50) NOT NULL,
        pdt_qty INT NOT NULL
    );
```

## Iniciando o Projeto

Depois de instalados as dependências nas pastas ***Frontend*** e ***Backend*** inicie os servidores nas suas respectivas pastas.

Na pasta ***Frontend***: 
```bash
    yarn start | npm start
```

Na pasta ***Backend***: 
```bash
    yarn run db | npm run db
```

## Rotas no Frontend 
*Lembrando que a ideialização das rotas até o momento é para facilitar minha visualização no desenvolvimento. Futuramente irei buscar bloquear acesso direto a elas pela URL, sendo permitido apenas acesso por ações na aplicação principal, obviamente logo após autenticação.*
Rota | Função
-----|-------
**/**   | *Aplicação principal após de logado e autenticado.*
**/findProducts** | *Modal para procurar e/ou adicionar produto a lista de compras.*
**/edit/product/:id** | *Faz a busca do produto pelo ID. Será usado para fazer a edição do produto.*
**/opencash** | *Modal de Abertura de caixa. O caixa deve ser aberto somento após informar o valor/salto($$) inicial para o dia. Em outras palavras, informar o valor que tem para ser usado como 'troco'.*
**/closing** | *Modal informativo com o valor das vendas do dia, em dinheiro e o valor que foi para a conta bancário.*
**/invoicing** | *Modal informativo com o valor das vendas por meio de pagamento, entre dinheiro, cartões e pix.*
**/login** | *Página Inicial para o colaborar se identificar, para poder ter acesso ao sistema.*
**/registerNewUser** | *Página/Modal (não decidi ainda) para cadastro de novos colaboradores.*
**/registerNewProduct** | *Página/Modal (não decidi ainda) para cadastro de novos produtos.*
**/*** | *Qualquer outra rota diferente dessas informadas, será mostrado o componente de Erro.*

## Rotas no Backend
*Lembrando que as rotas até o momento estão dessa maneira e possivelmente podem ser modificadas e/ou acrescentadas novas rotas conforme a necessidade do projeto*

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
