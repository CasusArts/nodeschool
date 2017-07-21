const http = require('http');
const addr = process.argv[2];

http.get(addr, (res) => {
  //if (err) console.error("err");
  let rawData = '';
  res.on('data', (chunk) => {
      rawData += chunk;
    })
    .on('end', () => {
      try {
        console.log(`${rawData.toString().length}`);
        console.log(rawData);
      } catch (e) {
        console.error(e.message);
      }
    });
});
