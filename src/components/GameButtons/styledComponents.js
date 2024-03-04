import Styled from 'styled-components'

export const ButtonItem = Styled.li`
    width: 50%;
    margin: auto;
    cursor: pointer;
    outline: none;
`

export const ChoiceImage = Styled.img`
    width: 140px;
    height: 140px;
    @media screen and (min-width: 768px) {
        width: 200px;
        height: 200px;
    }
`

export const CustomButton = Styled.button`
    background-color: transparent;
    border: none;
`
