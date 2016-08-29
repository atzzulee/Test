// entry.js

//require('!style!css!./style.css');
//require('!style!css!sass!./style.sass');

// require('./style.sass');

// var hello = require('./hello');
// var world = require('./world');

// document.write(hello + ', ' + world + '!');

//ES2015
import './style.sass';

import hello from './hello';
import world from './world';

import _ from 'underscore';

//var foo = bar; // 에러가 발생할 것이다.

document.write(`${hello}, ${world}!!`);
document.write(`Random: ${_.random(0, 100)}`);