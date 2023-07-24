const redux = require('redux');
const reducer = require('./reducer');
const reduxLogger = require('redux-logger');

const { createStore, combineReducers, applyMiddleware } = redux;

const logger = reduxLogger.createLogger();

const rootReducer = combineReducers(reducer);

const store = createStore(rootReducer, applyMiddleware(logger));

module.exports = store;