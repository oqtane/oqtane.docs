// From: https://github.com/christiansany/object-assign-polyfill/blob/master/index.js


// All credits go to the contributers on MDN
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill

exports.objectAssign = function(target, varArgs) { // .length of function is 2
  'use strict';
  if (target == null) { // TypeError if undefined or null
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var to = Object(target);

  for (var index = 1; index < arguments.length; index++) {
    var nextSource = arguments[index];

    if (nextSource != null) { // Skip over if undefined or null
      for (var nextKey in nextSource) {
        // Avoid bugs when hasOwnProperty is shadowed
        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
  }
  return to;
};

if (typeof Object.assign != 'function') {
  // console.error("loading Object.assign");
  Object.prototype.assign = Object.assign = exports.objectAssign;
}

// console.error('polyfill Object.assign loaded');
// console.error('Object.assign');
// console.error(Object.assign);