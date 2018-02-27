import React from 'react'
import { each } from 'lodash'
import { Dropdown } from 'semantic-ui-react'

export default ({ bars, currentBarIndex, onChange }) => {
  const pickerOptions = []
  each(bars, (bar, index) => {
    const option = {
      text: `Progress Bar ${index + 1}`,
      value: index
    }
    pickerOptions.push(option)
  })
  return (
    <Dropdown
      placeholder='Select Progress Bar'
      fluid
      selection
      options={pickerOptions}
      value={currentBarIndex}
      onChange={(event, data) => onChange(data.value)}
    />
  )
}
