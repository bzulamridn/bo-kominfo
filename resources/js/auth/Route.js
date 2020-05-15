import React from 'react';
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Master from './Master';
import Dashboard from './Dashboard';
import Agenda from './Agenda';
import Profil from './Profil';
import AdminPending from './AdminBookingPending';
import AdminSetuju from './AgendaSetuju';
import SyaratAdmin from './AdminSyarat';
import SyaratKetentuan from './SyaratKetentuan';
import Fasiltas from './Fasilitas';
import Operator from './Operator';
import Instansi from './Instansi';

export default class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
      <Route component={Master}>
        <Route path="/auth" component={Dashboard} />
        <Route path="/agenda" component={Agenda} />
        <Route path="/profil" component={Profil} />
        <Route path="/adminpending" component={AdminPending} />
        <Route path="/adminsetuju" component={AdminSetuju} />
        <Route path="/syarat" component={SyaratAdmin} />
        <Route path="/syaratketentuan" component={SyaratKetentuan} />
        <Route path="/fasilitas" component={Fasiltas} />
        <Route path="/operator" component={Operator} />
        <Route path="/instansi" component={Instansi} />
        {/* <Route path="/" component={Login} />
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
   */}
      </Route>
    </Router>
    );
  }

}


if (document.getElementById('main')) {
  ReactDOM.render(<Routes/>, document.getElementById('main'));
}