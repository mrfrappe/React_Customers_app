import React from 'react';
import styled from 'styled-components';
import ListRow from '../../molecules/ListRow/ListRow';
import Header from '../../atoms/Header/Header';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const List = () =>{
    return (
        <StyledWrapper>
            <Header>List title</Header>
            <ListRow></ListRow>
            <ListRow></ListRow>
            <ListRow></ListRow>
            <ListRow></ListRow>
            <ListRow></ListRow>
        </StyledWrapper>
    )

};

export default List;