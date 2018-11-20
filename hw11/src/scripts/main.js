import builder from './elementBuilder';
import './main.scss';

const date = new Date();
const content = `<div class = 'content'>
                   <span class = 'arrow'></span><h1>That's wierd, it's works!</h1>
                   <p>Date is - ${date.toLocaleDateString()}</p>
                 </div>`;

let main = builder('main', content, 'main');

export {main};