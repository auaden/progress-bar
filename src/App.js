import React, { Component } from 'react'
import axios from 'axios'
import { Header, Menu, Grid, Segment, Loader } from 'semantic-ui-react'
import './App.css'
import ButtonCollection from './components/ButtonCollection'
import ProgressBar from './components/ProgressBar'
import ProgressBarPicker from './components/ProgressBarPicker'

class App extends Component {
  constructor () {
    super()
    this.onButtonClick = this.onButtonClick.bind(this)
    this.onDropdownChange = this.onDropdownChange.bind(this)
    this.state = {
      data: null,
      currentBarIndex: 0
    }
  }

  async componentDidMount () {
    const { data } = await axios.get('http://pb-api.herokuapp.com/bars')
    this.setState({ data })
  }

  calculateProgress (currentValue, delta) {
    const updatedBar = currentValue + delta
    if (updatedBar < 0) {
      return 0
    }

    return updatedBar
  }

  onButtonClick (progress) {
    const {
      data: { bars },
      currentBarIndex
    } = this.state

    bars[currentBarIndex] = this.calculateProgress(bars[currentBarIndex], progress)

    this.setState({
      data: {
        ...this.state.data,
        bars
      }
    })
  }

  onDropdownChange (index) {
    this.setState({ currentBarIndex: index })
  }

  render () {
    if (!this.state.data) {
      return <Loader active />
    }

    const {
      data: {
        buttons,
        bars,
        limit
      },
      currentBarIndex
    } = this.state

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
              <ProgressBar
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
}

export default App
