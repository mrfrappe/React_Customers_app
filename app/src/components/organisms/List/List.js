/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ListRow from '../../molecules/ListRow/ListRow';
import Header from '../../atoms/Header/Header';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = ({ items }) => {
  return (
    <StyledWrapper>
      <Header>List title</Header>
      {items.map(({ id, thumb, first_name, last_name, comapny, country }) => (
        <ListRow
          id={id}
          thumb={thumb}
          first_name={first_name}
          last_name={last_name}
          comapny={comapny}
          country={country}
        />
      ))}
    </StyledWrapper>
  );
};
List.propTypes = {
  items: PropTypes.element.isRequired,
};

export default List;
