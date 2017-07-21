const http = require('http');
const addr = process.argv[2];

http.get(addr, (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];


  let rawData = '';
  res
    .on('data', (chunk) => {
      console.log(chunk.toString());
    })
    .on('error', (error) => {
      console.error(error);
    });
});

