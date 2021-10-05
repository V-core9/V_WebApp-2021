
const fs = require('fs');

const listDir = (dirName = null) => {
  if (dirName !== null) {
    try {
      var files = [];
      fs.readdirSync(dirName).forEach(file => {
        console.log(file);
        files.push(file);
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
