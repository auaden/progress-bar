import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      data: null
    }
  }

  async componentDidMount () {
    const { data } = await axios.get('http://pb-api.herokuapp.com/bars')
    this.setState(data)
  }

  render () {
    const { data } = this.state
    console.log(data)
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to my progress bars</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
