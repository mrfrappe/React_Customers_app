import styled from 'styled-components';

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
`;

export default ButtonIcon;
