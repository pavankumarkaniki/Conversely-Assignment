import {Component} from 'react'
import './index.css'

const buttonsList = [0, 1, 2, 3, 4, 5, 6, 7, 8]

class MatrixView extends Component {
  state = {
    buttonStates: buttonsList.map(() => ({boxColor: false})),
    listOfClickedButtons: [],
  }

  handleBox = event => {
    this.setState(prevState => {
      const updatedButtonStates = prevState.buttonStates.map(
        (eachBtn, index) =>
          event === index
            ? {...eachBtn, boxColor: !prevState.boxColor}
            : eachBtn,
      )
      const updatedClickedButtons = prevState.listOfClickedButtons.includes(
        event,
      )
        ? prevState.listOfClickedButtons
        : [...prevState.listOfClickedButtons, event]

      return {
        buttonStates: updatedButtonStates,
        listOfClickedButtons: updatedClickedButtons,
      }
    })
  }

  render() {
    const {buttonStates, listOfClickedButtons} = this.state
    const isLastButton = listOfClickedButtons.length === buttonsList.length
    return (
      <div className="bg-container">
        <div className="boxes-container">
          {buttonsList.map((eachButton, id) => {
            const bgBoxColor = isLastButton
              ? 'box-orange'
              : buttonStates[id].boxColor
              ? 'box-green'
              : ''
            return (
              <button
                key={id}
                className={`${bgBoxColor}`}
                type="button"
                onClick={() => this.handleBox(id)}>
                {eachButton}
              </button>
            )
          })}
        </div>
      </div>
    )
  }
}

export default MatrixView
