# Configurando Docker

<br />

Substitua os campos com `[]`

```
docker run --name [NAME] -e POSTGRES_PASSWORD=[PASSWORD] -p 5432:5432 -d postgres
docker run --name [NAME] -p 6379:6379 -d -t redis:alpine
```

**Opcional**

```
docker run --name  [NAME]  -v redisinsight:/db -p 8001:8001 -d -t redislabs/redisinsight:latest
```

<br />

# Instalando dependencias

<br />

Na raiz do projeto instale as dependências:

```
  $ yarn install
```

<br />

# Configurando TypeORM

- Renomeie o arquivo `ormconfig-example` na raiz do projeto para `ormconfig` e altere o `password` para o que foi definido no docker

- Crie uma database com o nome `apivendas` ou o nome que estiver no seu arquivo de `ormconfig`

- Rode as `migrations`
```
  $ yarn typeorm migration:run
```

<br />

# Rodando a aplicação:


```
  $ yarn dev
```
