const serverless = require('serverless-http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('https://e1zvbvqs3d.execute-api.us-east-1.amazonaws.com/production/', function (req, res) {
  res.render('index');
});

app.get('https://e1zvbvqs3d.execute-api.us-east-1.amazonaws.com/production/contact', function (req, res) {
  res.render('contact', { qs: req.query });
});

module.exports.handler = serverless(app);
