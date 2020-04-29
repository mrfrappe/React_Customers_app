import { customers } from '../data/customers';

const initialState = {
  customers,
};

const rootReducer = (state = initialState, action) => {
  console.log(state, action);
  return state;
};

export default rootReducer;
