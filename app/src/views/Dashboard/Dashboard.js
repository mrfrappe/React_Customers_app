/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/atoms/Header/Header';
import List from '../../components/organisms/List/List';

const StyledWrapper = styled.div`
  padding-left: 170px;
  padding-right: 20px;
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
  justify-content: space-around;
  font-family: 'Roboto', sans-serif;
  margin-top: 20px;
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
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const RemindersSection = styled.div`
  width: 50%;
  height: 400px;
`;

const InvoicesSection = styled.div`
  width: 50%;
  border-left: 1px solid #ccc;
  height: 400px;
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
      <StyledContent>
        <RemindersSection>
          <Header>Reminders</Header>
          <List
            items={reminders}
            headers={['Title', 'Start at', 'Finish at', 'Description']}
          ></List>
        </RemindersSection>
        <InvoicesSection>
          <Header>Invoices</Header>
          <List
            items={invoices}
            headers={['Number', 'Title', 'Start at', 'Finish at', 'Customer']}
          ></List>
        </InvoicesSection>
      </StyledContent>
    </StyledWrapper>
  );
};

const mapStateProps = ({ customers, invoices, reminders }) => {
  return { customers, invoices, reminders };
};
Dashborad.propTypes = {
  customers: PropTypes.array.isRequired,
  invoices: PropTypes.array.isRequired,
  reminders: PropTypes.array.isRequired,
};

export default connect(mapStateProps)(Dashborad);
