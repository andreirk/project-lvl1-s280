'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.greet = undefined;

var _readlineSync = require('readline-sync');

var _readlineSync2 = _interopRequireDefault(_readlineSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function greet() {
    var userName = _readlineSync2.default.question('May I have your name? ');
    console.log('Welcome, ' + userName + '!');
}

exports.greet = greet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJncmVldCIsInVzZXJOYW1lIiwicmVhZGxpbmVTeW5jIiwicXVlc3Rpb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVBLFNBQVNBLEtBQVQsR0FBZ0I7QUFDWixRQUFNQyxXQUFXQyx1QkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBakI7QUFDQUMsWUFBUUMsR0FBUixlQUF3QkosUUFBeEI7QUFDSDs7UUFFT0QsSyxHQUFBQSxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcclxuXHJcbmZ1bmN0aW9uIGdyZWV0KCl7XHJcbiAgICBjb25zdCB1c2VyTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xyXG4gICAgY29uc29sZS5sb2coYFdlbGNvbWUsICR7dXNlck5hbWV9IWApO1xyXG59XHJcblxyXG5leHBvcnQge2dyZWV0fSJdfQ==