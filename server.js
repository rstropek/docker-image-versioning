const http = require('http');
const port = process.env.PORT || 1337;
const message = process.env.MESSAGE || 'Hi!';
const version = process.env.VERSION || 'v1.0';

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end(`Your Node.js Webserver ${version} says: '${message}'`);
}

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
  if (err) {
    return console.error('something bad happened', err);
  } else {
    console.log(`server is listening on ${port}`);
  }
});
