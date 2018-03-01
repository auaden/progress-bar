import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ButtonCollection from '../ButtonCollection'
import 'semantic-ui-css/semantic.min.css'

storiesOf('Button', module)
  .add('with buttons', () => {
    const buttons = [20, 30]
    return <ButtonCollection buttons={buttons} />
  })
