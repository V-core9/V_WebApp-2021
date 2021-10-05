const listDir = require('./list_dir/index');

const vFileExplorer = {
  moduleName: "V_FILE_EXPLORER",
  version: "00.00.01",
  listDir: listDir,

}

console.log(vFileExplorer)
console.log(vFileExplorer.listDir('./PUBLIC'));
console.log(vFileExplorer.listDir('./SOURCE'));
