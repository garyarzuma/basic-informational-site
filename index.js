var http = require("http");
const { URL, URLSearchParams } = require("url");

//create a server object:
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    const baseURL = "https://" + request.headers.host;
    const myURL = new URL(request.url, baseURL);
    const text = myURL.searchParams.get("year");

    response.write("<p>" + text + "</p>"); //write a response to the client */
    response.end(); //end the response */
  })
  .listen(8080); //the server object listens on port 8080
