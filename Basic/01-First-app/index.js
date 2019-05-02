const http = require('http'); //Importa el HTTP
const fs = require('fs'); // Importa Fs para leer archivos

// Constants
const PORT = 50000;
const HOST = '0.0.0.0';

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
http.createServer(OnRequest).listen(PORT);
console.log('Running on http://',HOST,':',PORT);
