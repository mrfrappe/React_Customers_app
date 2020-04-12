import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DetailsView from '../DetailsView/DetailsView';
import ListView from '../ListView/ListView';
import { employeesData } from '../../assets/data/employeesData';
import { employeesDetailsData } from '../../assets/data/employeesDetailsData';
import { invoicesData } from '../../assets/data/invoicesData';
import AppContext from "../../context"
import './index.scss';

class Root extends React.Component {

  state = {
    items: [...employeesData],
    itemsDetails: [...employeesDetailsData],
    invoicesData: [...invoicesData]
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
  }

  onEditItem = (e) => {
    e.preventDefault();

    let employeeId = Number.parseInt(e.target.getAttribute('data-employee-id'));

    const editedItem = {
      item: {
        id: employeeId,
        first_name: e.target[0].value,
        last_name: e.target[1].value,
        email: e.target[2].value,
        gender: e.target[3].value,},
      itemDetails: {
        id: employeeId,
        company: e.target[4].value,
        address: e.target[5].value,
        city: e.target[6].value,
        country: e.target[7].value,
        iban: e.target[8].value,
        currency: e.target[9].value},
    }


    this.setState(prevState => ({
      items : prevState.items.map(item => (item.id == employeeId) ? editedItem.item : item),
      itemsDetails : prevState.itemsDetails.map(item => (item.id == employeeId) ? editedItem.itemDetails : item)
    }));

  };

  onDeleteItem = (e) => {
    e.preventDefault();
    const employeeId = Number.parseInt(window.location.href.substr(window.location.href.lastIndexOf(":") + 1, window.location.href.length ));

    this.setState(prevState => ({
      items : prevState.items.filter(item => (item.id != employeeId)),
      itemsDetails : prevState.itemsDetails.filter(item => (item.id != employeeId))
    }));

  };

  onDBSave = () => {
    employeesData = this.state.items;
    employeesDetailsData = this.state.itemsDetails;
    invoicesData = this.state.invoicesData;
  };

  render() {

    const contextElement = {
      ...this.state,
      onAddItem: this.onAddItem,
      onEditItem: this.onEditItem,
      onDeleteItem: this.onDeleteItem
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
