import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/atoms/Header/Header';
import List from '../../components/organisms/List/List';

const Customer = ({ customers }) => {
  return (
    <>
      <Header>Customer</Header>
      <List items={customers}></List>
    </>
  );
};

const mapStateProps = ({ customers }) => {
  return { customers };
};

Customer.propTypes = {
  customers: PropTypes.element.isRequired,
};

export default connect(mapStateProps)(Customer);