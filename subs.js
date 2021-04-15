

var zmq = require('./zeromq')
  , sock = zmq.socket('sub');

let zmqSubs = {

 msg  : '',

 
 init : function(){
	 
   sock.connect("tcp://127.0.0.1:5556");
   sock.subscribe("");
   console.log("Subscriber connected to port 5556");
 }
 

}
module.exports.runObj = zmqSubs;
module.exports.socket = sock;





