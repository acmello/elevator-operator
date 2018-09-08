#!/usr/bin/local/node
const R = require('ramda'); 
const isFunction = require('./helpers/utils');
const validator = require('./helpers/validator')

/* ParseIt 0.1
 * @author acmello
 */

/**
 * Config Object
 * instance: {String} init
 * alias => (not mandatory) {String} usage: -i
 * allowedParams => (not mandatory) {Array} application,
 * fn => (not mandatory as long as you have default setted) {Function}  
 */
const configTest = {
    init: {alias: '-i', allowedParams: [], fn: () => console.log('initializing')},
    create: {alias: '-c', fn: () => console.log('creating')},
    post: {alias: '-p', fn: () => console.log('creating a post')},
    abort: {alias: '-a', params: [], fn: () => console.log('aborting')}
};

 /**
  * Init 
  */
 const elevatorOperator = (config = {}, args = []) => {
    const { validate, validateAll } = validator.core;

    const validations = config.default 
        ? Object.assign({},)

    //const validations = [];
    validateAll(validations);

    return

    /**
     * 
     * @param {*} config 
     */
    const parseArgs = config => {
        return (args) => {
            return args.reduce((prev, current) => {
                if (config[current]) prev.push(config[current])
                return prev;
             }, [])

             throw new Error
        }
    }
    
    /**
     * 
     * @param {*} commands 
     */
    const runCommands = (commands) => commands.forEach(command => {
        command.fn && command.fn()
    })

    //console.log(parseArgs(config)(args));

    //init
    runCommands(
        parseArgs(config)(args)
    );
}

elevatorOperator(configTest, process.argv);