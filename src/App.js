import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

import MainCanvas from './components/MainCanvas'
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
    const {
      data,
      currentBarIndex
    } = this.state

    return (
      <MainCanvas
        data={data}
        currentBarIndex={currentBarIndex}
        onButtonClick={this.onButtonClick}
        onDropdownChange={this.onDropdownChange}
      />
    )
  }
}

export default App
