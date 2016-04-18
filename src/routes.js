/**
 * Created by ollyking on 07/04/2016.
 */
import React from 'react'
import { Router, Route, IndexRoute, browserHistory  } from 'react-router'
import App from './app';

export default () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>

        </Route>
    </Router>
)