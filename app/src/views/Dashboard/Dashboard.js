import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/atoms/Header/Header';

const StyledWrapper = styled.div`
  padding-left: 170px;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  height: 200px;
  background: #f1f1f1;
  align-items: center;
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoBox = styled.div`
  border: 1px solid #167efb;
  width: 25%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 8px;
`;

const Dashborad = ({ customers, invoices, reminders }) => {
  return (
    <StyledWrapper>
      <Header>Dashboard</Header>
      <StyledHeader>
        <InfoBox>
          <div>Customers length: </div>
          <div>{customers.length}</div>
        </InfoBox>
        <InfoBox>
          <div>Invoices length: </div>
          <div>{invoices.length}</div>
        </InfoBox>
        <InfoBox>
          <div>Reminders length: </div>
          <div>{reminders.length}</div>
        </InfoBox>
      </StyledHeader>
      <StyledContent>TO DO CHARTS</StyledContent>
    </StyledWrapper>
  );
};

const mapStateProps = ({ customers, invoices, reminders }) => {
  return { customers, invoices, reminders };
};
Dashborad.propTypes = {
  customers: PropTypes.element.isRequired,
  invoices: PropTypes.element.isRequired,
  reminders: PropTypes.element.isRequired,
};

export default connect(mapStateProps)(Dashborad);
