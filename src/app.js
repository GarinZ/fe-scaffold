import React from 'react';
import {render} from 'react-dom';

import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import count from './reducers/count'

// import Routing from './routing.js';
import Layout from './components/layout';
import Home from './components/home';
import Hello from './components/hello';
import Count from './components/count';



// 合并多个reducer
const reducer = combineReducers({
    count,
    routing: routerReducer
});

const store = createStore(reducer); // 创建redux状态容器
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
    <div>
        <Router history={history}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Home}/>
                <Route path="hello" component={Hello}/>
                <Route path="count" component={Count}/>
            </Route>
        </Router>
    </div>
</Provider>, document.getElementById('app'));
