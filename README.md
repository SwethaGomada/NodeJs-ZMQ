# NodeJs-ZMQ

To establish zmq connection with publisher and transport the data to web browser using websockets.

server-node.js : Accepts http requests and upgrades the connection to websocket. 
It further opens a zmq subscriber socket and transports the data to client through websockets.

js-websoc.html : connects to the server through websockets and displays received data on the browser. 

To Run the web-app:

1. Download all the files into a folder.
2. run server-node.js Node.js command prompt (will be available after installing Node.js).
3. start a publisher (in any language) on port 5556.
4. open js-websoc.html in browser

Data published will be displayed on the browser
