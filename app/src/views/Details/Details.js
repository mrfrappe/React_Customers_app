import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/atoms/Header/Header';
import Thumb from '../../components/atoms/Thumb/Thumb';
import Form from '../../components/organisms/Form/Form';
import Button from '../../components/atoms/Button/Button';
import { Redirect } from 'react-router';
import Preview from '../../components/organisms/Preview/Preview';
import { removeItem } from '../../actions/';

const StyledWrapper = styled.div`
  padding-left: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledContainer = styled.div`
  margin-top: 20px;
  border-top: 1px solid #ccc;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

class Details extends Component {
  state = {
    isEditMode: false,
  };

  handleIsEditMode = () => {
    this.setState(prevState => (prevState.isEditMode = !prevState.isEditMode));
  };

  render() {
    const { customers } = this.props;

    const customerId = Number.parseInt(
      window.location.href.substr(
        window.location.href.lastIndexOf(':') + 1,
        window.location.href.length,
      ),
    );

    console.log(customerId);

    const currentCustomerData = customers.find(customer => customer.id === customerId);

    return (
      <>
        {currentCustomerData === undefined ? (
          <Redirect to={'/customers'} />
        ) : (
          <>
            <StyledWrapper>
              <Header>Dashboard</Header>
              <Thumb secondary>
                <FontAwesomeIcon icon={faUser} />
              </Thumb>
              <StyledContainer>
                {this.state.isEditMode ? (
                  <Form
                    item={currentCustomerData}
                    type="customers"
                    mode="edit"
                    customers={customers}
                  ></Form>
                ) : (
                  <Preview currentCustomerData={currentCustomerData} />
                )}
              </StyledContainer>
              <ActionWrapper visible={this.state.isEditMode}>
                <Button secondary onClick={() => removeItem('customer', currentCustomerData.id)}>
                  REMOVE
                </Button>
                <Button
                  onClick={() => {
                    this.handleIsEditMode();
                  }}
                >
                  EDIT
                </Button>
              </ActionWrapper>
            </StyledWrapper>
          </>
        )}
      </>
    );
  }
}

const mapStateProps = ({ customers }) => {
  return { customers };
};

Details.propTypes = {
  customers: PropTypes.element.isRequired,
};

const mapDispatchToProps = dispatch => ({
  removeItem: (itemType, id) => dispatch(removeItem(itemType, id)),
});

export default connect(mapStateProps, mapDispatchToProps)(Details);
