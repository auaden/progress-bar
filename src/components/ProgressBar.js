import React from 'react'
import { map } from 'lodash'
import { Progress } from 'semantic-ui-react'
// import './styles/ButtonCollectionStyles.css'

export default ({ bars, currentBarIndex, limit }) => {
  // const currentBar = bars[currentBarIndex]

  return map(bars, (bar, index) => {
    const percentage = (bar / limit) * 100

    return (
      <div key={index}>
        {currentBarIndex === index ? 'currently controlling ' : ''}
        <Progress
          progress
          percent={percentage}
          error={percentage > 100}
          precision={0}
        />
      </div>
    )
  })
}
