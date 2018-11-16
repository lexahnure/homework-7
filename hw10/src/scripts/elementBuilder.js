const $ = require('jquery');

module.exports = (tag = 'div', content = '', className = 'box') => {
    let node = $(`<${tag}>`).addClass(className).html(content);
    return node;
};