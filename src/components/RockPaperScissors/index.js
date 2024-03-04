import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import GameButtons from '../GameButtons'
import GameResultView from '../GameResultView'

import {
  BgContainer,
  ScoreContainer,
  ScoreCard,
  GameHeading,
  ScoreText,
  GameScore,
  GameButtonsContainer,
  ButtonsList,
  RulesButton,
  RulesContainer,
  RulesImage,
  CloseButton,
  PopupContainer,
} from './styledComponents'

class RockPaperScissors extends Component {
  state = {
    gameScore: 0,
    showGameResult: false,
    choiceImage: {},
    randomChoice: {},
    resultMsg: '',
  }

  onClickButton = (id, imageUrl) => {
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * choicesList.length)
    if (choicesList[randomNumber].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        gameScore: prevState.gameScore + 1,
        showGameResult: true,
        resultMsg: 'YOU WON',
        randomChoice: choicesList[randomNumber],
        choiceImage: [id, imageUrl],
      }))
    } else if (choicesList[randomNumber].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        gameScore: prevState.gameScore - 1,
        showGameResult: true,
        resultMsg: 'YOU LOSE',
        randomChoice: choicesList[randomNumber],
        choiceImage: [id, imageUrl],
      }))
    } else if (choicesList[randomNumber].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        gameScore: prevState.gameScore - 1,
        showGameResult: true,
        resultMsg: 'YOU LOSE',
        randomChoice: choicesList[randomNumber],
        choiceImage: [id, imageUrl],
      }))
    } else if (choicesList[randomNumber].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        gameScore: prevState.gameScore + 1,
        showGameResult: true,
        resultMsg: 'YOU WON',
        randomChoice: choicesList[randomNumber],
        choiceImage: [id, imageUrl],
      }))
    } else if (choicesList[randomNumber].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        gameScore: prevState.gameScore + 1,
        showGameResult: true,
        resultMsg: 'YOU WON',
        randomChoice: choicesList[randomNumber],
        choiceImage: [id, imageUrl],
      }))
    } else if (choicesList[randomNumber].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        gameScore: prevState.gameScore - 1,
        showGameResult: true,
        resultMsg: 'YOU LOSE',
        randomChoice: choicesList[randomNumber],
        choiceImage: [id, imageUrl],
      }))
    } else {
      this.setState(prevState => ({
        gameScore: prevState.gameScore,
        showGameResult: true,
        resultMsg: 'IT IS DRAW',
        randomChoice: choicesList[randomNumber],
        choiceImage: [id, imageUrl],
      }))
    }
  }

  onClickPlayAgain = () => {
    this.setState({showGameResult: false})
  }

  renderGameResultView = () => {
    const {randomChoice, choiceImage, resultMsg} = this.state
    return (
      <GameResultView
        resultMsg={resultMsg}
        randomChoice={randomChoice}
        choiceImageUrl={choiceImage[1]}
        onClickPlayAgain={this.onClickPlayAgain}
      />
    )
  }

  renderGameView = () => {
    const {choicesList} = this.props

    return (
      <GameButtonsContainer>
        <ButtonsList>
          {choicesList.map(eachChoice => (
            <GameButtons
              key={eachChoice.id}
              eachChoice={eachChoice}
              onClickButton={this.onClickButton}
            />
          ))}
        </ButtonsList>
      </GameButtonsContainer>
    )
  }

  render() {
    const {gameScore, showGameResult} = this.state
    return (
      <BgContainer>
        <ScoreContainer>
          <GameHeading>
            ROCK
            <br />
            PAPER
            <br />
            SCISSORS
          </GameHeading>
          <ScoreCard>
            <ScoreText>Score</ScoreText>
            <GameScore>{gameScore}</GameScore>
          </ScoreCard>
        </ScoreContainer>
        {showGameResult ? this.renderGameResultView() : this.renderGameView()}
        <Popup modal trigger={<RulesButton>RULES</RulesButton>}>
          {close => (
            <PopupContainer>
              <RulesContainer>
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesContainer>
            </PopupContainer>
          )}
        </Popup>
      </BgContainer>
    )
  }
}

export default RockPaperScissors
