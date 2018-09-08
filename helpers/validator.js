'use strict'
const R = require('ramda');
const isFunction = require('./utils');


const IS_ARGS_EMPTY_MSG =  'Args should not be empty';
const HAS_DEFAULT_FUNCTION_MSG = 'Default should be a function';

/**
 * Curried validator 
 * @param {Function} conditionFn 
 * @param {Object} args  
 */
const validate = R.curry((conditionFn, args) => conditionFn(args));

/**
 * Execute a range of function in order to validate its conditions.
 * @param {Object} listFn
 */
const validateAll = (validations) => {
    Object.keys(validations).forEach(idx => {
        const { expression, message } = validations[idx];
        const isValid = isFunction(expression) ? expression() : expression;
        
        console.log(isValid, validations[idx]);

        if(!isValid) throw Error(message);
    })

    return true;
}

// pre-defined validations 
const isArgsEmpty = {
    expression: R.not(R.isEmpty(args)),
    message: IS_ARGS_EMPTY_MSG
};

const hasDefaultFunction = {
    expression: validate(config => isFunction(config.default)), 
    message: HAS_DEFAULT_FUNCTION_MSG
}

/*
* public functions 
*/
module.exports = { validate, validateAll }