const express = require('express');

const app = express();
const err = require('./middlewares/errHanding.js');

require('dotenv').config();
const port = process.env.PORT || 5000;
const routes = require('./router/index.js');

app.use(routes);

app.use(err);
app.listen(5000, () => {
  console.log('Example app listening on port ' +port);
});