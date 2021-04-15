
var WebSocketServer = require('F:/node_modules/websocket').server;
var http = require('http');
const zmqRun = require("F:/subs.js");

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(200);
    response.end();
});
server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});

wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});



wsServer.on('request', function(request) {
	console.log("in here");
     
    var connection = request.accept(null, request.origin);
    console.log((new Date()) + ' Connection accepted.');

	
	zmqRun.runObj.init(); 
 
   
   zmqRun.socket.on('message', function(message) {
     //console.log('received a message related to containing message:', message);
	 connection.send(message.toString('utf8'));
 });
	
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            
        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});