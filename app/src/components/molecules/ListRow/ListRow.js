/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEdit } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Thumb from '../../atoms/Thumb/Thumb';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';

const StyledTr = styled.tr`
  :hover {
    background: #f1f1f1;
  }
`;

const StyledTd = styled.td`
  height: 40px;
  text-align: center;

  ${({ centered }) =>
    centered &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

const ListRow = ({ id, thumb, first_name, last_name, company, country }) => {
  return (
    <StyledTr>
      <StyledTd centered>
        <Thumb>
          <FontAwesomeIcon icon={faUser} />
        </Thumb>
      </StyledTd>
      <StyledTd>
        <Paragraph>{first_name}</Paragraph>
      </StyledTd>
      <StyledTd>
        <Paragraph>{last_name}</Paragraph>
      </StyledTd>
      <StyledTd>
        <Paragraph>{company}</Paragraph>
      </StyledTd>
      <StyledTd>
        <Paragraph> {country}</Paragraph>
      </StyledTd>
      <StyledTd centered>
        <ButtonIcon as={Link} to={`/details/:${id}`}>
          <FontAwesomeIcon icon={faEdit} />
        </ButtonIcon>
      </StyledTd>
    </StyledTr>
  );
};
ListRow.propTypes = {
  id: PropTypes.element.isRequired,
  thumb: PropTypes.element.isRequired,
  first_name: PropTypes.element.isRequired,
  last_name: PropTypes.element.isRequired,
  company: PropTypes.element.isRequired,
  country: PropTypes.element.isRequired,
};

export default ListRow;
