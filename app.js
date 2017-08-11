const serverless = require('serverless-http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/contact', function (req, res) {
  res.render('contact', { qs: req.query });
});

module.exports.handler = serverless(app);
// app.listen(3000);
