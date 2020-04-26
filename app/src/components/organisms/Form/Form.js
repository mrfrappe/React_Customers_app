import React from 'react';
import styled from 'styled-components';
import FormInput from '../../molecules/FormInput/FormInput';
import Button from "../../atoms/Button/Button";
import Header from "../../atoms/Header/Header";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
`;

const FormButtonWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
`;

const List = () =>{
    return (
        <StyledWrapper>
            <Header>Form header</Header>
            <FormInput></FormInput>
            <FormInput></FormInput>
            <FormInput></FormInput>
            <FormInput></FormInput>
            <FormButtonWrapper>
                <Button>Add</Button>
            </FormButtonWrapper>
        </StyledWrapper>
    )

};

export default List;