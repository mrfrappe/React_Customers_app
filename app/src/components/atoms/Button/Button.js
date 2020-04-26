import styled, {css} from 'styled-components';


const Button = styled.button`
  height: 28px;
  line-height: 30px;
  width: ${({width}) => width || '110px'};
  color: #ffffff;
  background: ${({theme}) => theme.primary};
  border-radius: 15px;
  border: 1px solid ${({theme}) => theme.primary};
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  :hover {
      background: #ffffff;
      border: 1px solid ${({theme}) => theme.primary};
      color: ${({theme}) => theme.primary};
  }
  ${({secondary}) => (
      secondary && css`
      background: #e40000;
      border: 1px solid #e40000;
      :hover {
        background: ${({theme}) => theme.defaultTextColor};
        border: 1px solid #e40000;
        color: #e40000;   
      }

      `

      )
  }
`

export default Button;