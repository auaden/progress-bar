import React from 'react'
import { Button } from 'semantic-ui-react'
// import './styles/ButtonCollectionStyles.css'

export default ({ bars, currentBarIndex }) => {
  const currentBar = bars[currentBarIndex]

  return (
    <div>
      {currentBar}
    </div>
  )
}
