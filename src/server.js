var express = require('express');
var app = express();


// metodo de ruta GET
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/html/get.html');
});

// metodo de ruta POST
app.post('/', function (req, res) {
  res.sendfile(__dirname + '/html/post.html');
});

app.all('/html', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});
//Esta vía de acceso de ruta coincidirá con las solicitudes a la ruta raíz
app.get('/', function (req, res) {
  res.send('root');
});
//Esta vía de acceso de ruta coincidirá con cualquier valor con una “a” en
//el nombre de la ruta.
app.get(/a/, function(req, res) {
  res.send(__dirname + '/html');
});
app.listen(8083);


console.log("Servidor Express escuchando en modo %s", app.settings.env);
