# Backend do Projeto Controle de Caixa
Documentação do ***Backend*** do Projeto ***Controle de Caixa***.

## Stacks que serão utilizadas no Backend do Projeto

***Back-end:*** Node, Express, Axios, JWT. *(Em desenvolvimento)*

## Instalação e iniciando o Projeto

Clone o projeto.
```bash
  git clone https://github.com/DouglasSuzukiDS/CashSystem.git
```

Entre na *pasta do projeto* no ***Terminal***.
```bash
    cd CashSystem
```

No Terminal, entre na pasta ***Backend***. *(Em desenvolvimento)*
```bash
    cd Backend
```

Instale as dependências nas pastas do projeto, pasta ***Backend***.
```bash
    yarn add | npm install
```

## Criando o Banco de Dados *(utilizei o MySQL)*
*Seguindo a forma que eu fiz no MySQL Workbench*.

```sql
    CREATE DATABASE cashSystem; /* => Criação do Banco de Dados no Sistema. */

    USE cashSystem; /* => Selecionar o BD para usar. */
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

Depois de instalados as dependências nas pasta ***Backend*** inicie o servidor na respectiva pasta.

Na pasta ***Backend***: 
```bash
    yarn run db | npm run db
```

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