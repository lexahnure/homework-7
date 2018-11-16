const header = require('./scripts/header');
const footer = require('./scripts/footer');
const main = require('./scripts/main');
const $ = require('jquery');
const body = $('body');

body.append(header, main, footer);