const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../index.html'));
});

//catch all errors
app.use('*', (req, res) => {
  return res.status(404).send('invalid endpoint');
});

// //global error handler
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  const { status } = err;
  res.status(status).json(err);
};
app.use(errorHandler);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});

module.exports = app;
