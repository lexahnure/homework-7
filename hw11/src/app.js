import header from './scripts/header/header';
import footer from './scripts/footer/footer';
import {main} from './scripts/main';
import $ from 'jquery';
import './app.scss';

const body = $('body');

body.append(header, main, footer);