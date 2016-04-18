/**
 * Created by ollyking on 18/04/2016.
 */
import ReactDOM from 'react-dom'
import React from 'react';

require('../sass/main.scss');

import Routes from './routes'
import reducers from './reducers'
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Routes />
    </Provider> ,
    document.querySelector('.app'));