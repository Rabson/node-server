const http = require('http');

// Creating new http server.
http.createServer(function (req, res) {

    // Setting up header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Multiple writes
    // res.write(req.url); // Extract query url from request.
    res.write(' Hello World!');

    // Ending of response.
    res.end();

}).listen(8080, () => {

    // Server runnning status Callback.
    console.log(`server is running`)
});