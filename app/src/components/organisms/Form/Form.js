import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import FormInput from '../../molecules/FormInput/FormInput';
import Button from '../../atoms/Button/Button';
import Header from '../../atoms/Header/Header';
import { addItem, editItem } from '../../../actions/index';
import PropTypes from 'prop-types';


const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const List = ({ item, type, mode, customers }) => {

  console.log(item, customers)
  const object = {
    id: '',
    thumb: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    gender: '',
    company: '',
    city: '',
    country: '',
    country_code: '',
    address: '',
  };
  return (
    <>
      {mode == 'add' ? (
        <StyledWrapper>
          <Header>Add customer</Header>
          <FormInput label="First name" inputType="first_name"></FormInput>
          <FormInput label="Last name" inputType="last_name"></FormInput>
          <FormInput label="Email" inputType="email"></FormInput>
          <FormInput label="Phone" inputType="phone"></FormInput>
          <FormInput label="Gender" inputType="gender"></FormInput>
          <FormInput label="Company" inputType="company"></FormInput>
          <FormInput label="City" inputType="city"></FormInput>
          <FormInput label="Country" inputType="country"></FormInput>
          <FormInput label="Country code" inputType="country_code"></FormInput>
          <FormInput label="Address" inputType="address"></FormInput>
          <FormButtonWrapper>
            <Button onClick={() => addNewObject(object, customers)}>Add</Button>
          </FormButtonWrapper>
        </StyledWrapper>
      ) : (
        <StyledWrapper>
          <Header>Edit customer</Header>
          <FormInput label="First name" inputType="first_name">
            {item.first_name}
          </FormInput>
          <FormInput label="Last name" inputType="last_name">
            {item.last_name}
          </FormInput>
          <FormInput label="Email" inputType="email">
            {item.email}
          </FormInput>
          <FormInput label="Phone" inputType="phone">
            {item.phone}
          </FormInput>
          <FormInput label="Gender" inputType="gender">
            {item.gender}
          </FormInput>
          <FormInput label="Company" inputType="company">
            {item.company}
          </FormInput>
          <FormInput label="City" inputType="city">
            {item.city}
          </FormInput>
          <FormInput label="Country" inputType="country">
            {item.country}
          </FormInput>
          <FormInput label="Country code" inputType="country_code">
            {item.country_code}
          </FormInput>
          <FormInput label="Address" inputType="address">
            {item.address}
          </FormInput>
          <FormButtonWrapper>
            <Button onClick={() => editItem('customer', item.id, object)}>Save</Button>
          </FormButtonWrapper>
        </StyledWrapper>
      )}
    </>
  );
};

const addNewObject = (object, customers) => {
  object.id = customers.length + 1;
  object.first_name = 'test';
  object.thumb = 'test';
  object.first_name = 'test';
  object.last_name = 'test';
  object.email = 'test';
  object.phone = 'test';
  object.gender = 'test';
  object.company = 'test';
  object.city = 'test';
  object.country = 'test';
  object.country_code = 'test';
  object.address = 'test';

  addItem('customer', object);

  console.log(customers)

  // <Redirect to={'/customers'} />
};

const mapStateProps = ({ customers, invoices, reminders }) => {
  return { customers, invoices, reminders };
};

List.propTypes = {
  customers: PropTypes.array.isRequired,
  invoices: PropTypes.array.isRequired,
  reminders: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({

  addItem: (itemType, object) => dispatch(addItem(itemType, object)),
  editItem: (itemType, id, object) => dispatch(editItem(itemType, id, object)),
});

export default connect(mapStateProps, mapDispatchToProps)(List);
