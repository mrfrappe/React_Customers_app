import styled, {css} from 'styled-components';

const Thumb = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #cccccc;

    ${({secondary}) => 
        secondary && css `
        width: 300px;
        height: 300px;
        svg {
            transform: scale(10)
        }
    `}
`

export default Thumb;