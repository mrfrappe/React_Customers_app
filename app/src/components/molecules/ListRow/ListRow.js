import React from 'react';
import styled from 'styled-components';
import Thumb from '../../atoms/Thumb/Thumb';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEdit } from '@fortawesome/free-solid-svg-icons'



const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    :hover {
        background: #f1f1f1
    }
`;

const ListRow = () =>{
    return (
        <StyledWrapper>
            <Thumb>
                <FontAwesomeIcon icon={faUser} />
            </Thumb>
            <Paragraph>Firstname</Paragraph>
            <Paragraph>Lastname</Paragraph>
            <Paragraph> Email</Paragraph>
            <ButtonIcon>
                <FontAwesomeIcon icon={faEdit} />
            </ButtonIcon>
        </StyledWrapper>
    )

};

export default ListRow;