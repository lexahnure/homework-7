const getDate = () => {
  const date = new Date();
  const thisDate = `${date.toDateString()}, ${date.getHours()}:${date.getMinutes()}`;

  console.log(thisDate);
}
getDate();

const path = require('path');
const getFileName = () => {
  const fileName = path.basename(__filename);
  return console.log(fileName);
}
getFileName();