import React from 'react'
import { map, sortBy } from 'lodash'
import { Button } from 'semantic-ui-react'
// import './styles/ButtonCollectionStyles.css'

export default ({ buttons, onClick }) => {
  const sortedButtons = sortBy(buttons)
  const mappedButtons = map(sortedButtons, (button, index) => {
    return (
      <Button
        compact
        key={index}
        positive={button > 0}
        negative={button < 0}
        onClick={() => onClick(button)}
      >
        {button > 0 ? `+${button}` : button}
      </Button>
    )
  })
  return (
    <Button.Group fluid>
      {mappedButtons}
    </Button.Group>
  )
}
