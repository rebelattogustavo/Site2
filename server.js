const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

"scripts"; {
    "start";"node server.js",
    "test"; "echo \"Error: no test specified\" && exit 1"
  }