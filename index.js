const http = require("http");
const { URL, URLSearchParams } = require("url");
const fs = require("fs");

//create a server object:
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    const baseURL = "https://" + request.headers.host;
    const myURL = new URL(request.url, baseURL);
    const filename =
      myURL.pathname === "/" ? "./index.html" : "." + myURL.pathname + ".html";

    fs.readFile(filename, function (err, data) {
      if (err) {
        return fs.readFile("./404.html", function (err, data) {
          response.writeHead(404, { "Content-Type": "text/html" });
          return response.end(data);
        });
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      return response.end();
    });
  })
  .listen(8080); //the server object listens on port 8080
