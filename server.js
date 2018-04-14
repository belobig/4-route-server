// Dependencies
var http = require("http");
var fs = require("fs");
var url = require("url");

// Set our port to 8080
var PORT = 8081;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {



	var urlParts = url.parse(req.url);

	// switch statement that changes based on the URL passed in
	console.log(urlParts.pathname);
	switch (urlParts.pathname) {
		// if we are at localhost:7000
		case "/":
			displayHome(urlParts, req, res);
			break;

		// if we are at localhost:7000/portfolio
		case "/favFoods":
			favFoods(urlParts, req, res);
			break;

		// if we are at localhost:7000/funstuff
		case "/favMovies":
			favMovies(urlParts, req, res);
			break;

		case "/cssFrameworx":
			cssFrameworx(urlParts, req, res);
			break;

		default:
			break;
	}

}

function displayHome(url, req, res) {
	// Here we use the fs package to read our index.html file
	fs.readFile(__dirname + "/index.html", function (err, data) {

		// We then respond to the client with the HTML page by specifically telling the browser that we are delivering
		// an html file.
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(data);
	});
}

function favFoods(url, req, res) {
	// Here we use the fs package to read our index.html file
	fs.readFile(__dirname + "/favFoods.html", function (err, data) {

		// We then respond to the client with the HTML page by specifically telling the browser that we are delivering
		// an html file.
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(data);
	});
}

function favMovies(url, req, res) {
	// Here we use the fs package to read our index.html file
	fs.readFile(__dirname + "/favMovies.html", function (err, data) {

		// We then respond to the client with the HTML page by specifically telling the browser that we are delivering
		// an html file.
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(data);
	});
}

function cssFrameworx(url, req, res) {
	// Here we use the fs package to read our index.html file
	fs.readFile(__dirname + "/cssFrameworx.html", function (err, data) {

		// We then respond to the client with the HTML page by specifically telling the browser that we are delivering
		// an html file.
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(data);
	});
}

// Starts our server
server.listen(PORT, function () {
	console.log("Server is listening on PORT: " + PORT);
});
