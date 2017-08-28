'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _logo = require('../components/logo');

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement('div', { className: 'root', 'data-jsx': 3538718984
  }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 3538718984
  }), _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge', 'data-jsx': 3538718984
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', 'data-jsx': 3538718984
  }), _react2.default.createElement('title', {
    'data-jsx': 3538718984
  }, 'Next.js on Heroku')), _react2.default.createElement(_style2.default, {
    styleId: 3538718984,
    css: '.root[data-jsx="3538718984"]{font-family:sans-serif;line-height:1.33rem;margin-top:8vh,}@media (min-width:600px){.root[data-jsx="3538718984"]{margin-left:21vw;margin-right:21vw}}'
  }), _react2.default.createElement('h1', {
    'data-jsx': 3538718984
  }, _react2.default.createElement(_logo2.default, { style: { height: '1.45rem' } }), ' Next.js on Heroku'), _react2.default.createElement('p', {
    'data-jsx': 3538718984
  }, 'Deploy ', _react2.default.createElement('a', { href: 'https://zeit.co/blog/next', 'data-jsx': 3538718984
  }, 'Next.js'), ' universal web apps on ', _react2.default.createElement('a', { href: 'https://www.heroku.com/home', 'data-jsx': 3538718984
  }, 'Heroku'), '.'), _react2.default.createElement('p', {
    'data-jsx': 3538718984
  }, 'This ', _react2.default.createElement('strong', {
    'data-jsx': 3538718984
  }, 'demo deployment on Heroku'), ' is from the repo ', _react2.default.createElement('a', { href: 'https://github.com/mars/heroku-nextjs', 'data-jsx': 3538718984
  }, 'mars/heroku-nextjs'), '.'), _react2.default.createElement('p', {
    'data-jsx': 3538718984
  }, _react2.default.createElement('a', { href: 'https://github.com/mars/heroku-nextjs/archive/master.zip', 'data-jsx': 3538718984
  }, 'Download this Next.js app'), ' as a Heroku-ready template, or follow ', _react2.default.createElement('a', { href: 'https://github.com/mars/heroku-nextjs#production-deployment', 'data-jsx': 3538718984
  }, 'Production Deployment'), ' to push an existing app to Heroku.'));
};