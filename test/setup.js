import React from 'react'; // eslint-disable-line no-unused-vars
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('isomorphic-fetch')

var jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { document } = (new JSDOM('')).window;
global.document = document;

// fake localStorage 
global.localStorage = {};
localStorage.getItem = function (){};
localStorage.setItem = function() {};

Enzyme.configure({ adapter: new Adapter() });

chai.use(sinonChai);
chai.use(chaiAsPromised);

//global.document = new jsdom('');
global.window = document.defaultView;
global.navigator = { userAgent: 'browser' };

global.React = React;
global.expect = expect;

global.fdescribe = (...args) => describe.only(...args);
global.fit = (...args) => it.only(...args);		