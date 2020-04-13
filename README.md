<img alt="GoStack" src="https://miro.medium.com/max/2000/1*zFOmo73YnwZzrrTXZouEGQ.png" />

<h3 align="center">
 Boilerplate Node + Typescript + Jest +... +...+ ...
</h3>

<br>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/luanyata/node-boilerplate?color=%2304D361">

  <a href="https://luanyata.com">
    <img alt="Made by Luan Yata" src="https://img.shields.io/badge/made%20by-LuanYata-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/luanyata/node-boilerplate/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/luanyata/node-boilerplate?style=social">
  </a>
</p>

# Tecnologias

- node
- express
- typescript
- cors
- celebrate (Validação)
- JsonWebToken
- knex (Query language)
- SQLite (Banco de dados)

# Banco de Dados

O banco de dados é gerenciado pelo Knex. Toda alteraação na estrutura do banco deve se dar atraves de migration do Knex.

**Criar migration**

```shell
npx knex migration:make name_migration
```

**Execultar migrations:**

```shell
npx knex migrate:latest
```

# Commit

Todos os commits seguem um padrão estabelecido atravez de um conjunto de ferramentas

- CommitLint
- Commitizen
- Cz-emoji

# Testes

Todos os testes deve ser armazenados no diretorio `/src/tests`. São utilizados para realizar os testes as ferramentas:

- Jest
- SuperTests

**Executar testes**

```shell
npm run test
```

# Rodando a API

Após clonar o repositorio execute os comandos dentro da pasta do projeto:

Instalação das denpendências:

```shell
npm install
```

Iniciar o serviço em modo de desenvolvimento:

```shell
npm run dev
```

Build de Produção:

```shell
npm run prod
```

# Licença

MIT
