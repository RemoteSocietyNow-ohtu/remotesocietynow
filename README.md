# RemoteSocietyNow

[![Build Status](https://travis-ci.org/RemoteSocietyNow-ohtu/remotesocietynow.svg?branch=master)](https://travis-ci.org/RemoteSocietyNow-ohtu/remotesocietynow)

**Instructions**

Clone the repository

```bash
git clone <repository>
```

Create `.env` file in the root directory.

Define the necessary environment variables in `.env`.

Example contents of `.env`:

```

PORT=3001

```

Port 3001 will be used by default if not defined in `.env`

Before running the app you need to install requirements:

```bash
npm install
```

**Available scripts**

Run in development mode (nodemon)

```bash
npm run dev
```

Run on a server

```bash
npm start
```

# Push to Github

Changes made to the frontend have to be built

```bash
npm run build
```

Then you can commit & push normally
