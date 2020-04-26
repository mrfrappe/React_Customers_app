import styled, {css} from 'styled-components';

const Input = styled.input`
    border: 1px solid #cccccc;
    border-radius: 15px;
    height: 28px;
    width: ${({width}) => width || '200px'};
    line-height: 30px;
    padding-left: 10px;
    :focus {
        border: 1px solid ${({theme}) => theme.primary}
    }
    ::placeholder {
        
    }

    ${({secondary}) => 
        secondary && css `
            border: 1px solid #e40000;
    `}
`

export default Input;