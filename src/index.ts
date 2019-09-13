import { createServer, Server, IncomingMessage, ServerResponse } from "http";
import os from "os";

const port : number = 8083;
 
const server: Server = createServer((request: IncomingMessage, response: ServerResponse) => {
  response.end(`Hello from a Node service built with TypeScript on host ${os.hostname}`);
});
 
server.listen(port, (error: any) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server listening on port ${port}`);
  }
});