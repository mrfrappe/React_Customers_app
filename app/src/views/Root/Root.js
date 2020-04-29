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
            <Route path="/customers" component={Customer}></Route>
            <Route path="/customers/:" component={Details}></Route>
            <Route exaxt path="/reminders" component={Reminder}></Route>
            <Route exact path="/invoices" component={Invoice}></Route>
          </Switch>
        </MainTemplete>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
