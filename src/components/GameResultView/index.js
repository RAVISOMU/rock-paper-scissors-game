import {
  GameContainer,
  MyContainer,
  RandomText,
  ChoiceImage,
  ResultMsg,
  PlayAgainButton,
} from './styledComponents'

const GameResultView = props => {
  const {randomChoice, choiceImageUrl, resultMsg, onClickPlayAgain} = props

  const onPlayAgain = () => {
    onClickPlayAgain()
  }

  return (
    <>
      <GameContainer>
        <MyContainer>
          <RandomText>YOU</RandomText>
          <ChoiceImage src={choiceImageUrl} alt="your choice" />
        </MyContainer>
        <MyContainer>
          <RandomText>OPPONENT</RandomText>
          <ChoiceImage src={randomChoice.imageUrl} alt="opponent choice" />
        </MyContainer>
      </GameContainer>
      <ResultMsg>{resultMsg}</ResultMsg>
      <PlayAgainButton type="button" onClick={onPlayAgain}>
        PLAY AGAIN
      </PlayAgainButton>
    </>
  )
}

export default GameResultView
