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

## Development workflow and scripts ##

**Clone the repository**

```bash
git clone <repository>
```

**Developing backend**

Before running the app you need to install dependencies

```bash
npm install
```

Run in development mode (nodemon)

```bash
npm run dev
```

Port 3001 will be used by default if not defined in `.env`

http://localhost:3001/

If needed create `.env` file in the root directory. Define the necessary environment variables in `.env`.

Example contents of `.env`:

```

PORT=3001

```

To make a new build of frontend

```bash
npm run build:front
```

**Developing frontend**

Go to /frontend

Create `.env` file in the /frontend directory with following line
```REACT_APP_BACKEND_URL=http://localhost:3001```

Before running the app you need to install dependencies

```bash
npm install
```

Run in development mode

```bash
npm start
```
Frontend will be running at http://localhost:3000/

Make sure the backend is running as well at the port defined in `.env`.

**Eslint**

Check for eslint-errors

`npm run lint`

Automatically fix most common eslint errors

`npm run fix:lint`

# Push to Github

Make changes to local copy then push to master
```bash
git add .
git commit -m "your message"
git push
```


