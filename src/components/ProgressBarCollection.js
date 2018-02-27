import React from 'react'
import { map } from 'lodash'
import { Progress, Header } from 'semantic-ui-react'

export default ({ bars, currentBarIndex, limit }) => {
  return map(bars, (bar, index) => {
    const percentage = (bar / limit) * 100
    const color = currentBarIndex === index ? 'teal' : 'grey'
    return (
      <div key={index}>
        <Header as='h3' dividing>
          Progress Bar {index + 1}
        </Header>
        <Progress
          progress
          percent={percentage}
          error={percentage > 100}
          precision={0}
          color={color}
        />
      </div>
    )
  })
}
