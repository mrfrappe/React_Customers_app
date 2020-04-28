import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplete from '../../templates/MainTemplate';
import Customer from '../Customer/Customer';
import Invoice from '../Invoice/Invoice';
import Reminder from '../Reminder/Reminder';
import Dashboard from '../Dashboard/Dashboard';

function Root() {
  return (
    <>
      <BrowserRouter>
        <MainTemplete>
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route path="/customers" component={Customer}></Route>
            <Route path="/reminders" component={Reminder}></Route>
            <Route path="/invoices" component={Invoice}></Route>
          </Switch>
        </MainTemplete>
      </BrowserRouter>
    </>
  );
}

export default Root;
