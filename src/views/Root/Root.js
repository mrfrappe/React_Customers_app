import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DetailsView from '../DetailsView/DetailsView';
import ListView from '../ListView/ListView';
import { customers } from '../../assets/data/customers';
import { details } from '../../assets/data/details';
import { invoices } from '../../assets/data/invoices';
import AppContext from "../../context";
import moment from 'moment';
import './index.scss';

class Root extends React.Component {

  state = {
    items: [...customers],
    itemsDetails: [...details],
    invoicesData: [...invoices],
    isModalOpen: false,
    isModalInvoiceOpen: false,
  }

  onAddItem = (e) => {
    e.preventDefault();



    const newItem = {
      id: this.state.items.length + 1,
      first_name: e.target[0].value,
      last_name: e.target[1].value,
      email: e.target[2].value,
      gender: e.target[3].value,
    }
    const newDetails = {
      id: this.state.items.length + 1,

    }


    this.setState(prevState => ({
      items: [...prevState.items, newItem],
      itemsDetails: [...prevState.itemsDetails, newDetails]

    }));

    e.target.reset();

  };
  
  onAddInvoice = (e, customerId) => {
    e.preventDefault();

    var newItem = {
      id: '',
      customer__id: customerId,
      net: '',
      gross: '',
      tax: '',
      total: '',
      create_at: moment().format('D/MM/YYYY'),
      payed: false
    }

    this.setState(prevState => ({
      invoicesData : [...prevState.invoicesData, newItem]
    }));

  };

  onEditItem = (e, objectArray) => {
    e.preventDefault();

    let customerId = objectArray.customerObject.id;

    const editedItem = {
      item: {
        id: customerId,
        first_name: e.target[0].value,
        last_name: e.target[1].value,
        email: e.target[2].value,
        gender: e.target[3].value,},
      itemDetails: {
        id: customerId,
        company: e.target[4].value,
        address: e.target[5].value,
        city: e.target[6].value,
        country: e.target[7].value,
        iban: e.target[8].value,
        currency: objectArray.customerDetailsObject.currency,
        currency_code: objectArray.customerDetailsObject.currency_code,
        create_at: objectArray.customerDetailsObject.create_at,
        update_at: moment().format('D/MM/YYYY')
        }
      }

    this.setState(prevState => ({
      items : prevState.items.map(item => (item.id == customerId) ? editedItem.item : item),
      itemsDetails : prevState.itemsDetails.map(item => (item.id == customerId) ? editedItem.itemDetails : item)
    }));

  };

  onDeleteItem = (e, customerId) => {
    e.preventDefault();

    this.setState(prevState => ({
      items : prevState.items.filter(item => (item.id != customerId)),
      itemsDetails : prevState.itemsDetails.filter(item => (item.id != customerId)),
      isModalOpen: false,
    }));

  };

  onModalOpen = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      isModalOpen: true}));

  };

  onModalClose = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      isModalOpen: false}));

  };

  onModalInvoiceToggle = (e) => {
    e.preventDefault();
    switch(this.state.isModalInvoiceOpen) {
      case true:
        this.setState(prevState => ({
          isModalInvoiceOpen: false}));
        break;
      case false:
        this.setState(prevState => ({
          isModalInvoiceOpen: true}));
        break;
    }
  }

  render() {

    const contextElement = {
      ...this.state,
      onAddItem: this.onAddItem,
      onEditItem: this.onEditItem,
      onDeleteItem: this.onDeleteItem,
      onModalOpen: this.onModalOpen,
      onModalClose: this.onModalClose,
      onAddInvoice: this.onAddInvoice,
      onModalInvoiceToggle: this.onModalInvoiceToggle

    }
    return (
    <BrowserRouter>
    <AppContext.Provider value={contextElement}>
      <Switch>
        <Route exact path="/" component={ListView}></Route>
        <Route path="/edit" component={DetailsView}></Route>
      </Switch>
    </AppContext.Provider>
    </BrowserRouter>
    )
  }


}

export default Root; 
