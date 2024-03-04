import Styled from 'styled-components'

export const GameContainer = Styled.div`
    background-color: #223a5f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 600px;
    height: 100%;
    margin-top: 72px;
`

export const MyContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const RandomText = Styled.h1`
    font-family: 'Roboto';
    font-size: 16px;
    color: #ffffff;
`

export const ChoiceImage = Styled.img`
    height: 140px;
    width: 140px;
`

export const ResultMsg = Styled.p`
    font-family: 'Roboto';
    font-size: 24px;
    color: #ffffff;
`

export const PlayAgainButton = Styled.button`
    font-family: 'Bree Serif';
    font-size: 14px;
    color: #223a5f;
    background-color: #ffffff;
    padding: 12px 24px;
    border: none;
    border-radius: 15px;
    outline: none;
    cursor: pointer;
`
