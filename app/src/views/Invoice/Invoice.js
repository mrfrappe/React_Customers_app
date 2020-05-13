import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../../components/atoms/Header/Header';
import List from '../../components/organisms/List/List';

const StyledWrapper = styled.div`
  padding-left: 170px;
`;

const Invoice = ({ invoices }) => {
  return (
    <StyledWrapper>
      <Header>Invoices</Header>
      <List items={invoices}></List>
    </StyledWrapper>
  );
};

const mapStateProps = ({ invoices }) => {
  return { invoices };
};

Invoice.propTypes = {
  invoices: PropTypes.element.isRequired,
};

export default connect(mapStateProps)(Invoice);
