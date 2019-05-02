const http = require('http'); //Importa el HTTP
const fs = require('fs'); // Importa Fs para leer archivos

function OnRequest(request, response){
    response.writeHead(200,{'Content-type':'text/html'});
    fs.readFile('./index.html',null, function(error,data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found');
        } else {
            response.write(data);
        }

        response.end();
    });
    }
http.createServer(OnRequest).listen(80)
