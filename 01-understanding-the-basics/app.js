// Import a core nodejs module called http
// http is a module used to create a server
// that will listen for incoming requests
import http from 'http';

// Initialize a new server, also a callback function
// to handle incoming request and responses back
const server = http.createServer((req, resp) => {
    console.log(req);
})

// Initializes the server to keep it up
// by listening each user request
server.listen(3000);

