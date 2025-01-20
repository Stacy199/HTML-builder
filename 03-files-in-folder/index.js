const fs = require("fs");
const path = require('path');

const filePath = path.join(__dirname, 'secret-folder');
 

fs.readdir(filePath, (error, files) => {
    if (error) {
        return console.error('Error reading secret folder:', error);
    }

    files.forEach((file) => {
        const folderPath = path.join(filePath, file);

    fs.stat( folderPath, (error, stats) => {  
        if (error)  {
            return console.error(error);
        }
        if(stats.isFile()){
            const fileName = path.basename(file, path.extname(file));
            const fileExtention = path.extname(file).slice(1);
            const sizeKB = (stats.size/1024).toFixed(3);
            console.log(`${fileName} - ${fileExtention} - ${sizeKB}kb`);  
        }
    });
});
    
});