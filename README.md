# aurora-wallet
A VueJS and Vuex web application for keeping track of your funds.

### To build the application
```
npm install
```

### To run development server
```
npm run dev
```

##### Default port is set to 9000, to change this go to webpack.config.dev.js and change the line port
```
devServer: {
    host: 'localhost',
    port: 9000,
    hot: true,
    watchOptions: {
      poll: true
    }
  }
```
