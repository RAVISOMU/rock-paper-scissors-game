import Styled from 'styled-components'

export const BgContainer = Styled.div`
    min-height: 100vh;
    background-color: #223a5f;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
        padding-top: 54px;
        padding-bottom: 54px;
    }
`

export const ScoreContainer = Styled.div`
    border: 1px solid #ffffff;
    border-radius: 16px;
    width: 100%;
    height: 30%;
    max-width: 1110px;
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const GameHeading = Styled.h1`
    font-family: 'Bree Serif';
    font-size: 24px;
    font-weight: 400;
    color: #ffffff;

    @media screen and (min-width: 768px) {
        font-size: 28px;
    }
`

export const ScoreCard = Styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 16px;

    @media screen and (min-width: 768px) {
        width: 160px;
        height: 120px;
    }
`

export const ScoreText = Styled.p`
    font-family: 'Bree Serif';
    font-size: 20px;
    font-weight: 500;
    color: #223a5f;
    margin: auto;
    margin-bottom: 2px;
`

export const GameScore = Styled.p`
    font-family: 'Roboto';
    font-size: 42px;
    font-weight: 600;
    color: #223a5f;
    margin: auto;
    margin-top: 0px
`

export const GameButtonsContainer = Styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 24px;

    @media screen and (min-width: 768px) {
        margin-top: 48px;
    }
`

export const ButtonsList = Styled.ul`
    list-style-type: none;
    padding-left: 0px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 70%;
    }
`

export const RulesButton = Styled.button`
    align-self: flex-end;
    font-family: 'Bree Serif';
    font-size: 14px;
    color: #233a5f;
    background-color: #ffffff;
    padding: 8px 16px;
    border: none;
    border-radius: 7px;
    outline: none;
    cursor: pointer;
`

export const PopupContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RulesContainer = Styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 12px;
    height: 70%;
    width: 70%;

    @media screen and (min-width: 768px) {
        padding: 24px;
    }
`

export const RulesImage = Styled.img`
    height: 160px;
    width: 100%;
    height: 100%;
`

export const CloseButton = Styled.button`
    height: 24px;
    width: 24px;
    border: none;
    align-self: flex-end;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;

    @media screen and (min-width: 768px) {
        height: 36px;
        width: 36px;
    }
`
