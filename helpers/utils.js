const R = require('ramda');

/**
 * Curried functoin to check if the property is a function or not.
 * @param {Function} function
 * @returns {Function} 
 */
const isFunction = (fn) => typeof fn === 'function';

module.exports = isFunction