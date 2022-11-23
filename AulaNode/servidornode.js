var http = require('http');
var n = require('./modulo1');
var x = require('./modulodata');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("<b>AULA NODE 23/11</b>");
    res.write('<br>'+ n.nome());
    res.write('<br>'+ x.diadasemana());
    res.end("<center> <h2> OLA. BOA TARDE'</h2></center>");
}).listen(80);
