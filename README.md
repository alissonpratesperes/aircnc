<p align="center">
  <img src="./github/aircnc-logo.png" alt="aircnc-logo" width="30%"/>
</p>

___

<br/>

<p align="center">
  <a href="#sobre">SOBRE</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#tecnologia">TECNOLOGIA</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#execute">EXECUTE</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#autor">AUTOR</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#licença">LICENÇA</a>
</p>

<br/>

<p align="center">
  <img src="./github/aircnc-dashboard.png" alt="aircnc-dashboard" width="100%"/>
</p>

## SOBRE

A **aircnc** é uma Aplicação que visa conectar Empresas que querem abrir Spots e Desenvolvedores que procuram um lugar para trocar ideias com outros Devs conhecer a empresa e trabalhar lá por um período

## TECNOLOGIA

TOOLING | <a href="https://insomnia.rest/">Insomnia</a> • <a href="https://expo.dev/">Expo IO</a>

DATABASE | <a href="https://mongodb.com/">MongoDB</a>

INTEGRATION | <a href="https://expressjs.com/">Express</a> • <a href="https://axios-http.com/">Axios</a> • <a href="https://socket.io/">Socket IO</a>

BACK-END | <a href="https://nodejs.org/">NodeJS</a>

FRONT-END | <a href="https://reactjs.org/">ReactJS</a>

MOBILE | <a href="https://reactnative.dev/">React Native</a>

## EXECUTE

    - Clonar o Repositório
    - Acessar o Back-End: "./backend"
        |- Instalar as dependências com o Comando: "npm install --force"
        |- Acessar o arquivo: "./backend/src/server.js:13" e verificar URL de Conexão com o Banco de Dados
        |- Acessar o arquivo: "./backend/src/models/Spot.js:15" e atualizar o Endereço de IP para as Imagens do SpotSchema
            >_ Inicializar o Back-End com o Comando: "npm run dev"
    - Acessar o Front-End: "./frontend"
        |- Instalar as dependências com o Comando: "npm install --force"
        |- Acessar o arquivo: "./frontend/src/Pages/Dashboard/index.js:11" e atualizar o Endereço de Conexão dos WebSockets
        |- Acessar o arquivo: "./frontend/src/services/api.js:3" e atualizar o Endereço de Conexão do Front-End
            >_ Inicializar o Front-End com o Comando: "npm start"
    - Acessar o Mobile: "./mobile"
        |- Instalar as dependências com o Comando: "npm install --force"
        |- Acessar o arquivo: "./mobile/src/pages/List.js:12" e atualizar o Endereço de Conexão dos WebSockets
        |- Acessar o arquivo: "./mobile/src/services/api.js:3" e atualizar o Endereço de Conexão do Mobile
            >_ Inicializar o Mobile com o Comando: "expo start"

## AUTOR

Projeto desenvolvido durante a **Omni Stack Week 09** da <a href="https://rocketseat.com.br/">Rocketseat</a> ocorrida em **Outubro de 2019**

Acesse <a href="https://github.com/rocketseat-education/semana-omnistack-9">aqui</a> o **repositório oficial** do Projeto

## LICENÇA

Esse projeto está sob a **Licença MIT** veja o arquivo [LICENSE](https://github.com/alissonpratesperes/aircnc/blob/main/LICENSE) para mais detalhes

___

<p align="center">✍🏻&nbsp;with&nbsp;❤️&nbsp;by&nbsp;<a href="https://github.com/alissonpratesperes">me</a>&nbsp👨🏻‍💻</p>