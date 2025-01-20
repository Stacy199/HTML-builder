const fs = require('fs');
const path = require('path');
const readline = require('readline');


const filePath = path.join(__dirname, 'magicFile.txt');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fileCreater(){

    fs.open(filePath, 'w', (err) => {
        if(err) throw err;
        textEnter();
    });
}

function textEnter(){
    rl.question('Enter any your dream, and it comes true :) ', (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log('Youe dream comes true soon! Goodbye');
            rl.close();
            return;
        }

        fs.appendFile(filePath, input + '\n', (err) => {
            if (err) {
                console.error('Error', err);
            } else {
                console.log(`Your dream registreted sussesfylly in magicFile.txt FILE`);
            }
            textEnter();
        });
    });
}
fileCreater();
