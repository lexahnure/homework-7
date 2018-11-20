const builder = require('./elementBuilder');
const date = new Date();
const content = `<h1>That's wierd, it's works!</h1><p>${date.toLocaleDateString()}</p>`;

module.exports = builder('main', content, 'main');