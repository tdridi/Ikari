/**
 * Created by Talel on 2018-10-02.
 */
var http = require('http');
var routes = require('./routes');


http.createServer(routes.handleRequest).listen(3305);


