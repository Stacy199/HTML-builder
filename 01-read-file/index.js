const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

readStream.on('data', (date) => {
    console.log(date);
});

readStream.on('error', (err) => {
    console.error('Cannot read the file', err);
});