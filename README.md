## Documentação da API IndieSoundHub

### Introdução

Bem-vindo à documentação oficial da API IndieSoundHub! Esta API é a espinha dorsal do nosso emocionante projeto, proporcionando uma revolução na distribuição de música para artistas independentes. Este guia oferece uma visão abrangente das rotas disponíveis, seus usos e exemplos práticos.

### Rotas Disponíveis

A API IndieSoundHub oferece diversas rotas para acessar informações essenciais. Aqui estão algumas delas:

#### Rota "home"

- **Descrição:** Fornece uma visão geral da API IndieSoundHub.
- **Método:** GET
- **Endpoint:** `/home`

#### Rota "user"

- **Descrição:** Retorna uma lista com todos os usuários cadastrados.
- **Método:** GET
- **Endpoint:** `/user`

#### Rota "artist"

- **Descrição:** Apresenta uma lista completa dos talentosos artistas cadastrados.
- **Método:** GET
- **Endpoint:** `/artist`

#### Rota "music"

- **Descrição:** Revela todas as músicas disponíveis na plataforma.
- **Método:** GET
- **Endpoint:** `/music`

#### Rota "artist/copyright-holder"

- **Descrição:** Detalha os contratos de todos os artistas, proporcionando transparência.
- **Método:** GET
- **Endpoint:** `/artist/copyright-holder`

#### Rota "streaming-service"

- **Descrição:** Exibe a diversidade de plataformas de streaming disponíveis.
- **Método:** GET
- **Endpoint:** `/streaming-service`

### Utilizando a API

A API IndieSoundHub permite a realização de consultas valiosas para entender a dinâmica da plataforma. Abaixo, apresentamos alguns exemplos práticos de como utilizar algumas rotas específicas:

#### Exemplo 1: Número de Streams por Música

```http
GET /music
```

Retorna o número de streams para cada música na plataforma.

#### Exemplo 2: Receita Total por Serviço de Streaming

```http
GET /streaming-service
```

Calcula a receita total gerada por cada serviço de streaming.

#### Exemplo 3: Histórico de Streaming por Usuário

```http
GET /user
```

Exibe o histórico de streaming, incluindo o usuário, a música e o timestamp.

#### Exemplo 4: Duração Média de Reprodução por Usuário

```http
GET /user
```

Calcula a duração média de reprodução por usuário.

#### Exemplo 5: Número de Contratos Ativos por Artista

```http
GET /artist/copyright-holder
```

Lista o número de contratos ativos para cada artista.

### Conclusão

A API IndieSoundHub é uma ferramenta poderosa para explorar e compreender a riqueza de informações disponíveis em nossa plataforma. Utilize essas rotas e exemplos para mergulhar fundo na revolução musical que estamos construindo para artistas independentes.

Agradecemos por fazer parte desta jornada emocionante no mundo da música independente!

Para mais detalhes, entre em [contato](davidsonwferreira8@gmail.com).
