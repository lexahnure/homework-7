const getRandomNumber = (min = 1, max = 5) => {
  const number = Math.floor(Math.random() * (max - min)) + min;
  return console.log(number);
}

module.exports = (from, to) => () => getRandomNumber(from, to);