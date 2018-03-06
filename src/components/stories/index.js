import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import MainCanvas from '../MainCanvas'
import 'semantic-ui-css/semantic.min.css'

storiesOf('Main App', module)
  .add('App', () => {
    const mockData = { 'buttons': [36, 43, -41, -30], 'bars': [32, 18], 'limit': 190 }
    const currentBarIndex = 0
    return (
      <MainCanvas
        data={mockData}
        currentBarIndex={currentBarIndex}
        // onButtonClick={this.onButtonClick}
        // onDropdownChange={this.onDropdownChange}
      />
    )
  })
