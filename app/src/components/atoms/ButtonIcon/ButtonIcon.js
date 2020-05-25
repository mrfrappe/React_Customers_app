import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  height: 30px;
  width: 30px;
  color: #ffffff;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.primary};
  font-size: 10px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  padding: 8px;
  :hover {
    color: ${({ theme }) => theme.primary};
    background: #ffffff;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      position: fixed;
      right: 20px;
      bottom: 20px;
      -webkit-box-shadow: 0px 0px 61px 70px rgba(255, 255, 255, 1);
      -moz-box-shadow: 0px 0px 61px 70px rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 61px 70px rgba(255, 255, 255, 1);
      width: 60px;
      height: 60px;
      font-size: 30px;
      z-index: 10;
    `}

  ${({ mainMenu }) =>
    mainMenu &&
    css`
      :hover {
        color: #ffffff;
        background: ${({ theme }) => theme.primary};
      }
    `}
`;

export default ButtonIcon;
