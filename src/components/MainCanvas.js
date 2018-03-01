import React from 'react'
import { Header, Menu, Grid, Segment, Loader } from 'semantic-ui-react'
import ButtonCollection from './ButtonCollection'
import ProgressBarCollection from './ProgressBarCollection'
import ProgressBarPicker from './ProgressBarPicker'

export default ({ data, currentBarIndex, onClick, onDropdownChange }) => {
  const {
    buttons,
    bars,
    limit
  } = data

  if (!data) {
    return <Loader active />
  }

  return (
    <Grid stackable padded>
      <Grid.Row>
        <Grid.Column width={16}>
          <Segment clearing>
            <Header as='h2'>
              Mars Bars
            </Header>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <Menu vertical compact fluid stackable>
            <Menu.Item
              name='picker'
            >
              <Header as='h4'>Picker</Header>
              <ProgressBarPicker
                bars={bars}
                currentBarIndex={currentBarIndex}
                onChange={this.onDropdownChange}
              />
            </Menu.Item>

            <Menu.Item
              name='buttons'
            >
              <Header as='h4'>Controls</Header>
              <ButtonCollection
                onClick={this.onButtonClick}
                buttons={buttons}
              />
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column width={12}>
          <Segment clearing>
            <ProgressBarCollection
              bars={bars}
              currentBarIndex={currentBarIndex}
              limit={limit}
            />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
