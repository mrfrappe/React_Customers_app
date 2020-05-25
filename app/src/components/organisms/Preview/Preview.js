import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import FormInput from '../../molecules/FormInput/FormInput';
import Button from '../../atoms/Button/Button';
import Header from '../../atoms/Header/Header';

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 500px;
`;

const PreviewRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Preview = ({ currentCustomerData }) => {
  return (
    <PreviewWrapper>
      <Header>Preview header</Header>
      <PreviewRow>
        <Paragraph>Full name</Paragraph>
        {`${currentCustomerData.first_name} ${currentCustomerData.last_name}`}
      </PreviewRow>
      <PreviewRow>
        <Paragraph>Email</Paragraph>
        {currentCustomerData.email}
      </PreviewRow>
      <PreviewRow>
        <Paragraph>Phone</Paragraph>
        {currentCustomerData.phone}
      </PreviewRow>
      <PreviewRow>
        <Paragraph>Gender</Paragraph>
        {currentCustomerData.gender}
      </PreviewRow>
      <PreviewRow>
        <Paragraph>Company</Paragraph>
        {currentCustomerData.company}
      </PreviewRow>
      <PreviewRow>
        <Paragraph>City</Paragraph>
        {currentCustomerData.city}
      </PreviewRow>
      <PreviewRow>
        <Paragraph>Country</Paragraph>
        {currentCustomerData.country}
      </PreviewRow>
      <PreviewRow>
        <Paragraph>Country code</Paragraph>
        {currentCustomerData.country_code}
      </PreviewRow>
      <PreviewRow>
        <Paragraph>Address</Paragraph>
        {currentCustomerData.address}
      </PreviewRow>
    </PreviewWrapper>
  );
};

export default Preview;
