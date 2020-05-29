import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { appReducer } from './app/reducer';

const logger = createLogger({
  collapsed: true
});
const middlewares = [
  logger,
  thunk
];


const store = createStore(appReducer, applyMiddleware(...middlewares));
export default store;