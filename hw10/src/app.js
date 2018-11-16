const header = require('./scripts/header');
const footer = require('./scripts/footer');
const $ = require('jquery');
const body = $('body');

body.append(header, footer);