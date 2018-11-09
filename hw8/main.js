const date = new Date();
const fs = require('file-system');

fs.mkdir(name = 'newFolder', err => {
  fs.writeFile(`${name}/test.txt`, `${date.toDateString()}`, (err) => { if (err) console.log(err)});
  if (err) console.log(err);
});