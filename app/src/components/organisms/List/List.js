/* eslint-disable react/forbid-prop-types */
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

const StyledTh = styled.th`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const List = ({ items, headers }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map(header => (
            <StyledTh>{header}</StyledTh>
          ))}
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
  items: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
};

export default List;
