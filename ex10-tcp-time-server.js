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
