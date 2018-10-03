/**
 * Created by Talel on 2018-10-02.
 */
var fs = require('fs');
var url = require('url');


function renderHTML(path, response){
    "use strict";
    response.writeHead(200, {'content-type': 'text/html'});
    fs.readFile(path, null, function(error, data){
        "use strict";
        if (error){
            response.writeHead(404);
            response.write('File not Found !');

        } else{
            response.write(data);
        }
        response.end();
    });

}

module.exports = {
    handleRequest: function (request, response){
        response.writeHead(200, {'content-type': 'text/html'});
        var path = url.parse(request.url).pathname;
        switch (path){
            case'/':
                renderHTML('./index.html',response)
                break
            case'/login':
                renderHTML('./login.html',response)
                console.log(response.statusCode);
                break
            default:
                response.writeHead(404);
                response.write('File not Found !');
                response.end();
        }
    },
    //myVariable:'Salli 3ala ennibi'


};


