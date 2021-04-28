This can be used to receive message (and write those messages to a file) from
web browser console.

## Use Case

- Lets say you have say some links you want to extract from a site. But youre
  too lazy to write a python script or just filtering and extracting stuff from
  that site interactively from console seems like a good idea. Then you can use
  websockets to send content directly from web console to a file in your system.
  This was made exactly for that purpose when I ran into the same exact type of
  scenario.

## Usage

> You must have npm and node installed in your sytem

- `npm install`
- `node app.js <optional_file_name>` , will be saved to a file named log if you
  don't specify a filename
- Now go to your browser console and do
  `ws= new WebSocket('ws://localhost:65432')`

Now you've connected the node app and browser and you can send text from browser
without any problems.

- `ws.send(some_msg)` to send messages
- `ws.send('bye')` to kill the node app from the browser itself
