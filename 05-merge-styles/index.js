const fs = require('fs');
const path = require('path');

const stylesFolder = path.join(__dirname, 'styles');
const outputFolder = path.join(__dirname, 'project-dist');
const outputFile = path.join(outputFolder, 'bundle.css');


fs.mkdir(outputFolder, { recursive: true }, (err) => {
  if (err) throw err;

  fs.writeFileSync(outputFile, '', (err) => {
    if (err) throw err;
  });


  fs.readdir(stylesFolder, { withFileTypes: true }, (err, files) => {
    if (err) throw err;


    files.forEach(file => {
      if (file.isFile() && path.extname(file.name) === '.css') {
        const cssFilePath = path.join(stylesFolder, file.name);

    
        fs.readFile(cssFilePath, 'utf-8', (err, data) => {
          if (err) throw err;

          fs.appendFile(outputFile, data + '\n', (err) => {
            if (err) throw err;
          });
        });
      }
    });
  });
});