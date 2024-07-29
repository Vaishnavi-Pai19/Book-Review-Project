import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  // Makes the Redux store available to all the React components
import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';       // A middleware to handle asynchronous actions

import reducers from './reducers';

import App from './App';
import './index.css';

// Creating the Redux store and applying thunk middleware
const store = createStore (reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store = {store}>
       < App />
    </Provider>,
    document.getElementById('root')
);
