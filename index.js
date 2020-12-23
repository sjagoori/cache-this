#!/usr/bin/env node

const fs = require('fs');
const axios = require('axios');

var myArgs = process.argv.slice(2);
main();

function writeFile(filename, content) {
  fs.writeFileSync(filename, content);
}

async function getData(url) {
  return await axios.get(url).then(data => {
    return { data: data.data, host: data.request.host }
  })
}

async function main() {
  let data = await getData(myArgs[0]);
  writeFile(data.host + '.json', JSON.stringify(data.data))
}