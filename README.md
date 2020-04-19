# MERN Starter

Get started with the MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack. Includes ReduxJS for state management

## Steps

1. Install the npm modules using

```bash
$ npm install
$ npm run client-install
```

2. Code! In particular modify `package.json` and `config/default.json` file to include your database URL.
3. To test the API server only

```bash
$ npm run server
```

4. To test the API + React development server

```bash
$ npm run dev
```

5. Deployment is simple, for example to heroku. Just create a heroku app and push to the heroku repository, the `heroku-postbuild` script in `package.json` takes care of building the React app

```bash
$ heroku create
$ git push heroku master
```
