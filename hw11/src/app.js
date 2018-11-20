import {header} from './scripts/header';
import {footer} from './scripts/footer';
import {main} from './scripts/main';
import $ from 'jquery';
import './app.scss';

const body = $('body');

body.append(header, main, footer);