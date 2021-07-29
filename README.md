# Nuxt.js + Express + Arduino Uno (Firmata) + Johnny-Five + Firebase (Realtime Database)
Projeto consiste em uma aplicação front-end que liga e desliga um LED (pode ser facilmente substituido por uma lâmpada, mas objetivo é inserir a lógica) atráves do status do Firebase que é alimentado por uma API desenvolvida em Node.JS com Express.

## Hardware 
- 01x Arduino Uno
- 01x LED 
- 01x Cabo USB A-B

## Requisitos 
- [Node.js](https://nodejs.org/en/)
- [Johnny-Five](http://johnny-five.io/)
- [Arduino + Firmata](https://www.arduino.cc/en/software)
- [Firebase Realtime Database](https://firebase.google.com/products/realtime-database)

## Instalação

```bash
npm install
```
## Configurando Firebase
Editar o arquivo de configuração com as informações de integração do firebase.
>api/config/index.js


## Comandos

| Comando | Descrição |
|---------|-------------|
| npm run build | Buildar o projeto |
| npm start | Inicializar o projeto |

O projeto por padrão é inicializado em [http://localhost:3000/](http://localhost:3000/)



## End-points
### POST
```javascript
// URL
http://localhost:3000/api/arduino

// Exemplo Body
{
   "led": true
}

// Examplo Response
Lampada Acesa!
```
### GET
```javascript
// URL
http://localhost:3000/api/arduino

// Examplo Response
true
```

## Documentação

- [ExpressJS](http://expressjs.com/en/guide/routing.html)
- [Nuxt.js](https://nuxtjs.org/guide/)
- [Vue.js](http://vuejs.org/guide/)
- [Johnny-Five](http://johnny-five.io/api/)
- [Firmata](https://www.arduino.cc/en/reference/firmata)

## Tutorial
[YouTube](https://www.arduino.cc/en/reference/firmata)
