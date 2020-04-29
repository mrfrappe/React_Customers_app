/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEdit } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Thumb from '../../atoms/Thumb/Thumb';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  :hover {
    background: #f1f1f1;
  }
`;

const ListRow = ({ id, thumb, first_name, last_name, comapny, country }) => {
  return (
    <StyledWrapper>
      <Thumb>
        <FontAwesomeIcon icon={faUser} />
      </Thumb>
      <Paragraph>{first_name}</Paragraph>
      <Paragraph>{last_name}</Paragraph>
      <Paragraph> {comapny}</Paragraph>
      <Paragraph> {country}</Paragraph>
      <ButtonIcon as={Link} to={`/details/:${id}`}>
        <FontAwesomeIcon icon={faEdit} />
      </ButtonIcon>
    </StyledWrapper>
  );
};
ListRow.propTypes = {
  id: PropTypes.element.isRequired,
  thumb: PropTypes.element.isRequired,
  first_name: PropTypes.element.isRequired,
  last_name: PropTypes.element.isRequired,
  comapny: PropTypes.element.isRequired,
  country: PropTypes.element.isRequired,
};

export default ListRow;
