/*
  HOWTO:
  (1st Terminal) $: node ex10-tcp-time-server.js 1234 (or enter another port number)
  (2nd Terminal) $: curl http://localhost:1234 (or another port number you entered)
*/
const net = require('net');
const port = process.argv[2];

const server = net.createServer((c) => {
  const date = new Date();
  let month = date.getMonth() + 1;
  if (month.toString().length < 2) {
    month = '0' + month;
  }
  c.write(`${date.getFullYear()}-${month}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}\r\n`);
  c.pipe(c);
});

server.listen(port);
