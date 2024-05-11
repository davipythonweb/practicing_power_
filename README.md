# practicing*power*

-prettier esta *desabilitado* in Codespaces

* com framework next  e biblioteca react

*server no render.com*
`https://laboratorio-1-6w67.onrender.com/`
- conferir a pagina de status do server
`https://status.render.com/`

#### formato de data ISO-8601

- instalar pacote como dependencia como de desenvolvimento
`npm install --save-dev jest@29.6.2`

- primeiros passos(de baixo para cima)
`npm install react-dom@18.2.0`
`npm install react@18.2.0`
`npm install next@13.1.6`
`npm init`
`nvm install`
`nvm alias default lts/hydrogen`
`nvm install lts/hydrogen`

<!-- ultilizando .env => para variaveis de ambiente -->

<!-- instalar o pg -->
`npm install pg@8.11.3`

<!-- usando DOCKER-COMPOSE -->
`criar o arquivo compose.yaml`
<!-- criar a variavel de ambiente password -->
`environment:POSTGRES_PASSWORD:(a sua senha)`
<!-- criar e rodar o container e imagem -->
`docker compose up`
<!-- porta e server do container  do docker postgres  ipv4 => 0.0.0.0 port => 5432 -->
<!-- listar processos -->
`docker ps`
<!-- forçar listar todos os processos -->
`docker ps --all`
`docker -a`
<!-- ver os logs do docker -->
`docker logs (nome do container)`
<!-- subindo o container em modo desanexado do terminal(rosa o service em background) -->
`docker compose up --detach`
`docker compose up -d`
<!-- subindo o container e forçar uma recriação -->
`docker compose up -d --force-recreate`
<!-- destruir o container -->
`docker compose down`
<!-- criar o container a partir do arquivo yaml detro de uma pasta -->
`docker compose --file infra/compose.yaml up`
`docker compose -f infra/compose.yaml up`


<!-- instalar o postgres-client -->
`sudo apt update`
`sudo apt install postgresql-client`

<!-- comandos postgres -->
`psql --host=localhost --username=postgres --port=5432`
<!-- sair do terminal editor do postgres -->
`\q`



- para rodar testes
`npm run test`
`npm test`
<!-- script para testes automaticos -->
`npm run test:watch`

<!-- TDD => Test Driven Development => 
      DESENVOLVIMENTO ORIENTADO A TESTES -->

<!-- Primeiro se faz o test, depois programa
    o codigo que vai ser a entrada para o test  -->

- Fazer query sanitization ou limpeza de consulta


- studying a little
  _pluguins_
- Prettier
- EditorConfig
- Live Server
- jest

- ler arquivos com prettier => npm run lint:check
- escrever nos arquivos com prettier => npm run lint:fix
- para verificar as alteraçoes nos arquivos => git diff
- verificar o satatus dos arquivo => git status
- levar para a stage tudo que foi modificado na pasta de trabalho => git add -A
- para rever as modificações => git log
- para veras modificaçoes de forma resumida => git log --stat
- tudo eh salvo => git commmit -m ''
- ver modificaçoes de forma resumida => git log --oneline
- tudo que estiver no stade, emendar com o commit anterior.(o commit anterior eh descartado e eh criado um novo commit) => git commit --amend
- empurar as modificações para o github(upload) => git push
- forçar o envio das modificações, pos o git commit --amend => git push --force
- puxar as informaçoes do github(download) => git pull
- modificar um arquivo no git => git mv +(arquivo) + (novoarquivo)

- resumindo o comando git add -A e commit -m =>git commit -am ''

* OBS: os commits são IMUTÁVEIS.
A branch  main, local/main eh a linha do tempo principal.
A banch origin/main eh a branch  de origem que esta no github, aponta o repositorio de origem na linha do tempo main.
#### origamid_frontend
