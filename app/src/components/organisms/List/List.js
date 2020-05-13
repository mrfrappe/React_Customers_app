/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ListRow from '../../molecules/ListRow/ListRow';
import Header from '../../atoms/Header/Header';

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
`;

const List = ({ items }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Company</th>
          <th>Country</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, thumb, first_name, last_name, company, country }) => (
          <ListRow
            id={id}
            thumb={thumb}
            first_name={first_name}
            last_name={last_name}
            company={company}
            country={country}
          ></ListRow>
        ))}
      </tbody>
    </StyledTable>
  );
};
List.propTypes = {
  items: PropTypes.element.isRequired,
};

export default List;
