import { customers } from '../data/customers';
import { invoices } from '../data/invoices';
import { reminders } from '../data/reminders';

const initialState = {
  customers,
  invoices,
  reminders,
};

const rootReducer = (state = initialState, action) => {
  console.log(state.customers);
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        customers: [...state.customers.filter(item => item.id !== action.payload.id)],
      };
    case 'ADD_ITEM':
      return {
        ...state,
        customers: [...state.customers, action.payload.object],
      };
    case 'EDIT_ITEM':
      return {
        // ...state,
        // customers : [
        //   ...state["customers"].filter(item => item.id !== action.payload.id),
        // ]
      };
    default:
      break;
  }

  return state;
};

export default rootReducer;
