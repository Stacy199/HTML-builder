const fs = require("fs/promises");
const path = require('path');

async function copyDir(currentFile, newFile){
    
    try {
        await fs.rm(newFile, { force: true, recursive: true });
    } catch (error) {
        
    }

    await fs.mkdir(newFile, { recursive: true });

    const files = await fs.readdir(currentFile);

    for (const file of files) {
        const sourceFile = path.join(currentFile, file);
        const copyFile = path.join(newFile, file);

        const stat = await fs.stat(sourceFile);
        if (stat.isDirectory()) {
            await copyDir(sourceFile, copyFile);
        } else {
            await fs.copyFile(sourceFile, copyFile);
        }
    }
};

const sourceFolder = path.join(__dirname, 'files');
const copyFolder = path.join(__dirname, 'files-copy');

copyDir(sourceFolder, copyFolder);