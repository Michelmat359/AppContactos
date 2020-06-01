var express = require('express');
var app = express();
// mount middleware
app.use(express.static('../AppContactos/www')); //contenido estático en './public'
app.listen(8080);
console.log('HTTP server running');