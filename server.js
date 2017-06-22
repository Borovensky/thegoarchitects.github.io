var express = require('express');
var fs = require('fs'); // модуль по работе с файлами и файловой системой.
var app = express();

app.use(express.static('public')); // сообщаем express где лежат статические файлы

app.get(['/', '*'],  function(req, res){
	 fs.readFile('public/index.html', 'utf-8', function(err, body){
	 	res.send(body);
	 });
});

app.listen(8080);
