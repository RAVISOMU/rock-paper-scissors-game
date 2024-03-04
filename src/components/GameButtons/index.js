import {ButtonItem, ChoiceImage, CustomButton} from './styledComponents'

const GameButtons = props => {
  const {eachChoice, onClickButton} = props
  const {id, imageUrl} = eachChoice
  const testId = id.toLowerCase()

  const onClickGameButton = () => {
    onClickButton(id, imageUrl)
  }

  return (
    <ButtonItem>
      <CustomButton
        type="button"
        onClick={onClickGameButton}
        data-testid={`${testId}Button`}
      >
        <ChoiceImage src={imageUrl} alt={id} />
      </CustomButton>
    </ButtonItem>
  )
}

export default GameButtons
