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

    console.log(e.target, e.target[0].value)

    const editedItem = {
      items: {
        first_name: e.target[0].value,
        last_name: e.target[1].value,
        email: e.target[2].value,
        gender: e.target[3].value,},
      itemsDetails: {
        company: e.target[4].value,
        address: e.target[5].value,
        city: e.target[6].value,
        country: e.target[7].value,
        iban: e.target[8].value,
        currency: e.target[9].value},
    }
    
    // to do extend objects
    this.setState(prevState => ({

    }));

  }

  render() {

    const contextElement = {
      ...this.state,
      onAddItem: this.onAddItem,
      onEditItem: this.onEditItem
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
