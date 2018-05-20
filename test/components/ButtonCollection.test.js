import React from 'react'
import ButtonCollection from '../../src/components/ButtonCollection'

test('render buttons', () => {
  const wrapper = global.shallow(
    <ButtonCollection buttons={[20]} />
  )
  expect(wrapper).toMatchSnapshot()
})
