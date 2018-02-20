import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import ButtonCollection from './components/ButtonCollection'
import ProgressBar from './components/ProgressBar'
import ProgressBarPicker from './components/ProgressBarPicker'

class App extends Component {
  constructor () {
    super()
    this.state = {
      data: null,
      currentBarIndex: 0
    }
  }

  async componentDidMount () {
    const { data } = await axios.get('http://pb-api.herokuapp.com/bars')
    console.log('data from api', data)
    this.setState({ data })
  }

  onButtonClick = (progress) => {
    const {
      data: { bars },
      currentBarIndex
    } = this.state
    
    bars[currentBarIndex] = bars[currentBarIndex] + progress

    this.setState({
      data: {
        ...this.state.data,
        bars
      }
    })
  }

  onDropdownChange = (index) => {
    this.setState({ currentBarIndex: index})
  }

  render () {
    if (!this.state.data) {
      return <div>Loading</div>
    }

    const {
      data: {
        buttons,
        bars
        // limit
      },
      currentBarIndex
    } = this.state

    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to my progress bars</h1>
        </header>
      
        <ProgressBar
          bars={bars}
          currentBarIndex={currentBarIndex}
        />
        <ButtonCollection
          onClick={this.onButtonClick}
          buttons={buttons}
        />
        <ProgressBarPicker
          bars={bars}
          currentBarIndex={currentBarIndex}
          onChange={this.onDropdownChange}
        />
      </div>
    )
  }
}

export default App
