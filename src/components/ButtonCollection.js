import React from 'react'
import { map } from 'lodash'
import { Button } from 'semantic-ui-react'
// import './styles/ButtonCollectionStyles.css'

export default ({ buttons }) => {
  const mappedButtons = map(buttons, (button) => <Button >{button}</Button>)
  return (
    <Button.Group>
      {mappedButtons}
    </Button.Group>
  )
}
