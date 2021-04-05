import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormInput = ({ label, inputType, value }) => {
  console.log(value)
  return (
    <StyledWrapper>
      <Label>{label}</Label>
      <Input width="300px" placeholder={inputType} type={inputType}>{value}</Input>
    </StyledWrapper>
  );
};

export default FormInput;
