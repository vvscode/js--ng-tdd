var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

var contacts = [{
  "name":"Vasil V",
  "age":18,
  "occupation":"Web developer",
  "email":"some@e.mail"
},{
  "name":"Kate B",
  "age":18,
  "occupation":"Coach",
  "email":"e@b.com"
},{
  "name":"Tut Plus",
  "age":22,
  "occupation":"Code mentor",
  "email":"check@me.at"
}];
app.get('/contacts', function(req, res) {
  res.status(200).json(contacts);
});

app.listen(9001);
console.log('Server listen http://localhost:9001');
