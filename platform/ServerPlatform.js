const http = require('http');
const {Request, Response} = require('../');
const Platform = require('../platform/Platform');

class ServerPlatform extends Platform{

    /**
     * Port of the server
     * @param {number} port 
     */
    constructor(port){
        super();
        this.port = port;
    }

    run(application){
        const requestListener = (request, response) => {
            application.dispatch(new ServerRequest(request), new ServerResponse(response));
        }

        const server = http.createServer(requestListener);
        server.listen(this.port);

    }
}

class ServerRequest extends Request{
    /**
     * @param {http.ServerRequest} request 
     */
    constructor(request){
        super();
        this.httpRequest = request;
    }
}

class ServerResponse extends Response{
    /**
     * @param {http.ServerResponse} response 
     */
    constructor(response){
        super();
        this.httpResponse = response;
    }

    write(content){
        this.httpResponse.write(content);
    }

    end(){
        this.httpResponse.end();
    }
}

module.exports = ServerPlatform;