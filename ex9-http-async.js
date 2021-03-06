// TODO: Use Promises instead of callback hell!

// HOWTO: node ex9-http-async.js api2 api2 api3

const https = require('https');
const after = require('after');

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];


let data1 = [];
let data2 = [];
let data3 = [];


function callData(url, callback) {
  https.get(url, (res) => {
    let rawData = '';
    res.on('data', (chunk) => {
      rawData += chunk;
    }).on('end', () => {
      callback(rawData.toString());
    });
  });
}

function showData(data) {
  console.log(data);
}

callData(url1, function (data) {
  console.log(data);
  callData(url2, function (data2) {
    console.log(data2);
    callData(url3, function (data3) {
      console.log(data3)
    });
  });
});
