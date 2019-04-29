let http;
http = require('http');
const module1 = require('./module1');
//const module2 = require('./module2');
function OnRequest(request, response){
    response.writeHead(200,{'Content-type':'text/plain'});
    response.write(module1.myString);
//    response.write(module2.myVariable);
    module1.myFuction();
//    module2.myFuction();
    response.end();
}
http.createServer(OnRequest).listen(3000)
