const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

const api = require('./server/api');
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//angular dist folder
app.use(express.static(path.join(__dirname, 'dist')));
//api location
app.use('/', api);
//reference html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
//define port for express server
const port = process.env.PORT || '3000';
app.set('port', port);
//set server variable to run server
var server = http.createServer(app);
server.listen(port, () => console.log ("The server is up and running"));
