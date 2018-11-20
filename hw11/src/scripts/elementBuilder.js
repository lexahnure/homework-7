import $ from 'jquery';

export default (tag = 'div', content = '', className = 'box') => {
    let node = $(`<${tag}>`).addClass(className).html(content);
    return node;
};