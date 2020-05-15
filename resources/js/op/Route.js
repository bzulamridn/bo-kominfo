import React from 'react';

import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
//main layout
import Master from './Master';
import Login from './Login';


export default class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
      <Route component={Master}>
        <Route path="/op" component={Login} />
      </Route>
    </Router>
    );
  }

}


if (document.getElementById('oproot')) {
  ReactDOM.render(<Routes/>, document.getElementById('oproot'));
}
