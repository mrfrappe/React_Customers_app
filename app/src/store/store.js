import { createStore } from 'redux';
import customersApp from '../reducers/reducers';

const store = createStore(customersApp);

export default store;
