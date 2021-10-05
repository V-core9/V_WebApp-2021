let path = require('path');
const fs = require('fs');

const listDir = (dirPath = null) => {
  if (dirPath !== null) {
    try {
      var files = [];
      fs.readdirSync(dirPath).forEach(file => {
        var currentFile = { name: file, stats: JSON.parse(JSON.stringify( fs.statSync(path.join(dirPath, file))))}
        console.log(currentFile);
        files.push(currentFile);
      });
      return files;
    } catch (err) {
      return err;
    }
  } else {
    return false;
  }
}

module.exports = listDir;
