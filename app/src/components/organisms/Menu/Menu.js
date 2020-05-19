import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUsers } from '@fortawesome/free-solid-svg-icons';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 150px;
  background: #167efb;
  height: 100%;
  color: #ffffff;

  p {
    user-select: none;
    font-weight: bold;
    font-size: 18px;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: bold;
  }
  a svg {
    transform: scale(2);
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;

  li {
    margin: 15px 00px;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    :hover {
      color: #000000;
    }
  }
`;

const Menu = () => {
  return (
    <StyledWrapper>
      <ButtonIcon mainMenu as={Link} to="/dashboard">
        <FontAwesomeIcon icon={faUsers} />
      </ButtonIcon>
      <UlWrapper>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/customers">Customers</Link>
        </li>
        <li>
          <Link to="/invoices">Invoices</Link>
        </li>
        <li>
          <Link to="/reminders">Reminders</Link>
        </li>
      </UlWrapper>
      <ButtonIcon as={Link} to="/settings">
        <FontAwesomeIcon icon={faCog} />
      </ButtonIcon>
    </StyledWrapper>
  );
};

export default Menu;
