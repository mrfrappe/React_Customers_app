import { customers } from '../data/customers';
import { invoices } from '../data/invoices';
import { reminders } from '../data/reminders';

const initialState = {
  customers,
  invoices,
  reminders,
};

const rootReducer = (state = initialState, action) => {
  console.log(state, action);
  return state;
};

export default rootReducer;
