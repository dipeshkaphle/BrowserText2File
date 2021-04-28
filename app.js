const WebSocket = require('ws');
const fs = require('fs');

const wss = new WebSocket.Server({ port: 65432 });
let filename;

if (process.argv.length > 2) {
  filename = process.argv[2];
} else filename = 'log';

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    if (message == 'bye') {
      wss.close();
    } else {
      console.log(`"${message}" written to file:  ${filename}`);
      fs.appendFile(filename, message + '\n', (err) => {
        if (err) {
          console.log(err);
          return;
        }
      });
    }
  });

  ws.send('Hi! Welcome');
});
