import React from 'react';
import styled from 'styled-components';
import Header from '../../components/atoms/Header/Header';
import Thumb from '../../components/atoms/Thumb/Thumb';

const StyledWrapper = styled.div`
  padding-left: 170px;
`;

const Details = () => {
  return (
    <StyledWrapper>
      <Header>Dashboard</Header>
      <Thumb secondary></Thumb>
    </StyledWrapper>
  );
};

export default Details;
