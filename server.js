var express = require('express');

var app = express();

var contacts = [
  { name: 'Vasil' },
  { name: 'Kate' }
];

app.get('/contacts', function(req, res) {
  res.status(200).json(contacts);
});

app.listen(9001);
console.log('Server listen http://localhost:9001');
