const express = require('express');
const app = express();
var cors = require('cors')

var bodyParser = require('body-parser');
const connectServer = require('../config/mongodb/index.js');
const err = require('./middlewares/errHanding.js');

require('dotenv').config();
const port = process.env.PORT || 5000;
const routes = require('./router/index.js');
const command = require('./command/index.js');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

connectServer();
app.use(err);
app.listen(5000, () => {
  command();
  console.log('Example app listening on port ' +port);
});