#!/usr/bin/node
/* script that writes a string to a file. */

const fs = require('fs');
const arch = process.argv[2];
const data = process.argv[3];

fs.writeFile(arch, data, 'utf8', (err) => {
  if (err) {
    console.log(err);
  }
});
