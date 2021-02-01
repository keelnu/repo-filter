const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../index.html'));
});

// graphql endpoint
// const githubUrl = 'https://api.github.com/graphql';

//catch all errors
app.use('*', (req, res) => {
  return res.status(404).send('invalid endpoint');
});

// //global error handler
app.use(function (err, req, res, next) {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 500, //always go 500 with server side errors
    message: {err: 'An error occurred'},
  };
  const errorObj = Object.assign(defaultError, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});

module.exports = app;
