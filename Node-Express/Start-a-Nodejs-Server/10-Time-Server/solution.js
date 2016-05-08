 var net = require('net');

function abc(n) { return n < 10 ? '0' + n : n }
var d;
var s;
var server = net.createServer(function(socket) {
  d = new Date();
  s = d.getFullYear() + "-"
    + abc(d.getMonth() + 1) + "-"
    + abc(d.getDate()) + " "
    + abc(d.getHours()) + ":"
    + abc(d.getMinutes()) + "\n";
  socket.end(s);
});
server.listen(process.argv[2]);
