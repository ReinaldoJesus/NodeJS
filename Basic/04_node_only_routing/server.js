const http = require('http');
const app = require('./app');
http.createServer(app.handlerRequest).listen(8000);