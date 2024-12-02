// Import a core nodejs module called http
// http is a module used to create a server
// that will listen for incoming requests
import http from 'http';
import fs from "fs"

// Initialize a new server, also a callback function
// to handle incoming request and responses back
const server = http.createServer((req, resp) => {
    // req method
    const method = req.method;

    // set the response header
    if(req.url === '/') {
        resp.setHeader("Content-Type", "text/html");
        resp.write("<html>");
        resp.write("<head><title>Enter a message</title></head>");
        resp.write("<body><form action='/message' method='POST'> <input name='message' type='text' /> <button>Send</button> </form></body>");
        resp.write("</html>")
        return resp.end();
    }

    if(req.url === '/message' && method === 'POST') {
        fs.writeFileSync("message.txt", "DUMMY");
        resp.statusCode = 302;
        resp.setHeader("location", "/");
        return resp.end();
    }

    resp.setHeader("Content-Type", "text/plain");
    resp.write("<html>");
    resp.write("<head><title>Enter a message</title></head>");
    resp.write("<body><h1>Hello world from my NodeJS Server</h1></body>");
    resp.write("</html>")
    resp.end();
})

// Initializes the server to keep it up
// by listening each user request
server.listen(3000);

