## **Rodar projeto**

<br />

## Docker

substitua os campos com `[]`

```
docker run --name [NAME] -e POSTGRES_PASSWORD=[PASSWORD] -p 5432:5432 -d postgres
```

Na raiz do projeto instale as dependências:

```
  $ npm install ou yarn install
```

## TypeORM

- renomeie o arquivo `ormconfig-example` para `ormconfig` e altere o `password`

- Rode as `migrations`
```
  $ npm run typeorm migration:run
  $ yarn typeorm migration:run
```

rode a aplicação:

```
  $ npm start ou yarn start
```
