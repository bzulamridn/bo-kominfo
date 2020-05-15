import React from 'react';

import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
//main layout
import Master from './Master';
import Login from './Login';
import Register from './Register';
import Second from './second';
import Passcode from './Passcode';
import  UserProfile  from "./userprofile";
import WidgetList from "./widget";
import UserList from './userlist';
import Email from './Email';

export default class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
      <Route component={Master}>
        <Route path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/passcode/:email" component={Passcode} />
        <Route path="/forgot" component={Email} />

        <Route path="/users">
          <Route component={Second}>
            <IndexRoute component={UserList} />
          </Route>
          <Route path=":userId" component={UserProfile} />
        </Route>
  
        <Route path="/widgets">
          <Route component={Second}>
            <IndexRoute component={WidgetList} />
          </Route>
        </Route>
  
      </Route>
    </Router>
    );
  }

}


if (document.getElementById('root')) {
  ReactDOM.render(<Routes/>, document.getElementById('root'));
}
