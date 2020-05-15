import React from 'react';
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Show from './Show';


export default class Routes extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/show" component={Show} />
            </Router>
        );
    }

}


if (document.getElementById('mainx')) {
    ReactDOM.render(<Routes />, document.getElementById('mainx'));
}