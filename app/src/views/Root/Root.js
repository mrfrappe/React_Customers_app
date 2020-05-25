import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainTemplete from '../../templates/MainTemplate';
import Customer from '../Customer/Customer';
import Invoice from '../Invoice/Invoice';
import Reminder from '../Reminder/Reminder';
import Dashboard from '../Dashboard/Dashboard';
import Details from '../Details/Details';
import store from '../../store/store';

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplete>
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route exact path="/customers" component={Customer}></Route>
            <Route path="/details/:id" component={Details}></Route>
            <Route path="/customers/:id" component={Details}></Route>
            <Route exaxt path="/reminders" component={Reminder}></Route>
            <Route path="/reminders/:id" component={Reminder}></Route>
            <Route exact path="/invoices" component={Invoice}></Route>
            <Route path="/invoices:id" component={Invoice}></Route>
          </Switch>
        </MainTemplete>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
