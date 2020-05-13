import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../../components/atoms/Header/Header';
import List from '../../components/organisms/List/List';

const StyledWrapper = styled.div`
  padding-left: 170px;
`;

const Reminder = ({ reminders }) => {
  return (
    <StyledWrapper>
      <Header>Reminder</Header>
      <List items={reminders}></List>
    </StyledWrapper>
  );
};

const mapStateProps = ({ reminders }) => {
  return { reminders };
};

Reminder.propTypes = {
  reminders: PropTypes.element.isRequired,
};

export default connect(mapStateProps)(Reminder);
