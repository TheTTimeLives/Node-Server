// # **Instructions**

// * Using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.
// * Make sure you create a Github repo and commit this code!

// **Bonus**

// * Look for other ways to expand what your server can do. As possibilities:
//   * Generate the good/bad phrase randomly from a list of predefined phrases
//   * Use the `twitter` package inside the response to also return a random tweet


// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests, 443 is secure web traffic
var PORT = 7000;

var PORT2 = 7500;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("Hey fuck you!"+ request.url);
}

function handleRequestb (request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("Hey don't fuck!" + request.url);
  }

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
// in this example, handleRequest is a callback. I don't remember why.
var server = http.createServer(handleRequest);

var serverb = http.createServer(handleRequestb);

// Start our server so that it can begin listening to client requests.
//Arguements this method takes is the PORT for listening and then a callback which I suppose is option.
server.listen(PORT, function() {

  // Log (server-side) when our server has started

  //local host = IP ADDRESS
  console.log("Server listening on: http://localhost:" + PORT);
  console.log("Server listening on: http://localhost:%s",PORT); //Even in a string %s will add within a string your second arguement, in this case PORT
})

serverb.listen(PORT2, function() {

    // Log (server-side) when our server has started
  
    //local host = IP ADDRESS
    console.log("Server listening on: http://localhost:" + PORT2);
    console.log("Server listening on: http://localhost:%s",PORT2); //Even in a string %s will add within a string your second arguement, in this case PORT
  });
