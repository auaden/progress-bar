import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import ButtonCollection from './components/ButtonCollection'

class App extends Component {
  constructor () {
    super()
    this.state = {
      data: null
    }
  }

  async componentDidMount () {
    const { data } = await axios.get('http://pb-api.herokuapp.com/bars')
    console.log('data from api', data)
    this.setState({ data })
  }

  render () {
    if (!this.state.data) {
      return <div>Loading</div>
    }

    const { buttons, bars, limit } = this.state.data

    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to my progress bars</h1>
        </header>
        <ButtonCollection buttons={buttons} />
      </div>
    )
  }
}

export default App
