import styled, {css} from 'styled-components';

const Label = styled.label`
    height: 28px;
    line-height: 30px;
    color: #cccccc;
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding-left: 15px;
    :focus {
        color: ${({theme}) => theme.primary}
    }

    ${({secondary}) => 
        secondary && css `
            color: #e40000;
    `}

`

export default Label;