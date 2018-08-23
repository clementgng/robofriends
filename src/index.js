import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './containers/App';
import { Provider } from 'react-redux'; // Provider will pass the store to all components in the tree
import { createStore, applyMiddleware, combineReducers } from 'redux'; // create a store from a root reducer
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
// Card is default, dont need to destructure it
// export default [THING GOES HERE] uses capitalized word
// robots is not default, need to destructure it
// robots is an array of objects
// imports that aren't single, use lowercase
const logger = createLogger(); // useful debug tool to see state changes in redux
const rootReducer = combineReducers({searchRobots: searchRobots, requestRobots: requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunk, logger)); //applyMiddleware is ordered from left to right


ReactDOM.render(
                <Provider store={store}>
                  <App />
                </Provider>
                , document.getElementById('root'));
registerServiceWorker();
