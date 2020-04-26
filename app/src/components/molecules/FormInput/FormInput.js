import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const FormInput = () =>{
    return (
        <StyledWrapper>
            <Label>Test</Label>
            <Input placeholder="Test"></Input>
        </StyledWrapper>
    )

};

export default FormInput;