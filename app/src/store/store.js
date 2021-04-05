import { createStore } from 'redux';
import customersApp from '../reducers/reducers';

const store = createStore(
    customersApp,/* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
