const http = require("http");
const { URL, URLSearchParams } = require("url");
const fs = require("fs");
const express = require("express");
const app = express();

app.get("/about", function (request, response) {
  const filename = "./about.html";

  fs.readFile(filename, function (err, data) {
    response.write(data);
    return response.end();
  });
});

//create a server object:
app.get("/", function (request, response) {
  const filename = "./index.html";

  fs.readFile(filename, function (err, data) {
    response.write(data);
    return response.end();
  });
});

app.get("/contact-me", function (request, response) {
  const filename = "./contact-me.html";

  fs.readFile(filename, function (err, data) {
    response.write(data);
    return response.end();
  });
});

app.get("*", function (request, response) {
  const filename = "./404.html";

  fs.readFile(filename, function (err, data) {
    response.write(data);
    return response.end();
  });
});

app.listen(8080); //the server object listens on port 8080
