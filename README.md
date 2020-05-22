# RemoteSocietyNow

[![Build Status](https://travis-ci.org/RemoteSocietyNow-ohtu/remotesocietynow.svg?branch=master)](https://travis-ci.org/RemoteSocietyNow-ohtu/remotesocietynow)


## Introduction ##

Remote-work and remote-life can become new key efforts in limiting CO2 emissions.
You and your company actually earn real money and save time, plus productivity increases.

## Technologies and platforms ##
⋅⋅⋅NodeJS Backend  
⋅⋅⋅React front end  
⋅⋅⋅Travis CI https://travis-ci.org/RemoteSocietyNow-ohtu/remotesocietynow  
⋅⋅⋅Staging Heroku https://remotesocietynow.herokuapp.com/  
⋅⋅⋅Eslint https://github.com/RemoteSocietyNow-ohtu/remotesocietynow/blob/master/.eslintrc.js

## Coding Conventions ##

[Coding conventions](./docs/conventions.md)

## Getting started ##

***1. Clone the repository***

```bash
git clone <repository>
```

***2. Install dependencies***

```bash
npm install
```

***3. Start the project in development mode***

```bash
npm run dev
```

Port 3001 will be used by default if not defined in `.env`. Project will be open at address:

http://localhost:3001/

If needed create `.env` file in the root directory. Define the necessary environment variables in `.env`.

Example contents of `.env`:

```
PORT=3001
```

Backend and frontend are automatically built after making changes to the code in development mode. 

## Linting and testing ##

**Eslint**

Check for eslint-errors

`npm run lint`

Automatically fix most common eslint errors

`npm run fix:lint`

**Jest**

You can run tests with command

`npm run test`

## Push to Github

Make changes to local copy then push to master
```bash
git add .
git commit -m "your message"
git push
```


