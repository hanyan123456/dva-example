/*
 * @Author: 寒嫣
 * @Date: 2019-12-26 11:43:31
 * @Description: file content
 */
import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Home from './routes/home';
import List from './routes/list'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/home" exact component={Home} />
        <Route path="/list" exact component={List} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
