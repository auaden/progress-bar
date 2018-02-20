import React from 'react'
import { map } from 'lodash'
import { Button } from 'semantic-ui-react'
// import './styles/ButtonCollectionStyles.css'

export default ({ buttons, onClick }) => {
  const mappedButtons = map(buttons, (button, index) => {
    return (
      <Button
        key={index}
        onClick={() => onClick(button)}
      >
        {button}
      </Button>
    )
  })
  return (
    <Button.Group>
      {mappedButtons}
    </Button.Group>
  )
}
