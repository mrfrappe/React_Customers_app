import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../../components/atoms/Header/Header';
import List from '../../components/organisms/List/List';

const StyledWrapper = styled.div`
  padding-left: 170px;
`;

const headers = [' ', 'First Name', 'Last name', 'Company', 'Country', 'Action'];

const Customer = ({ customers }) => {
  return (
    <StyledWrapper>
      <Header>Customer</Header>
      <List items={customers} headers={headers}></List>
    </StyledWrapper>
  );
};

const mapStateProps = ({ customers }) => {
  return { customers };
};

Customer.propTypes = {
  customers: PropTypes.element.isRequired,
};

export default connect(mapStateProps)(Customer);
