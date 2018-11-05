const randomNumber = require('./getRN')(1, 10);
randomNumber();

const read = require('./read');
read('name.txt')
  .then(text => console.log(text))
  .catch(err => console.log(err));