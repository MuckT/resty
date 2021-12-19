import React, { useState } from "react";
import RequestForm from './Components/Form/Form'
import Response  from './Components/Results/Results'

import './App.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      method: 'GET',
      response: []
    }
  }

  handleSubmit = async (method, url, response) => {
    this.setState({
      url: url,
      method: method,
      response: response
    })
  }

  render() {
    return (
      <div className="App">
        <RequestForm handleSubmit={this.handleSubmit}/>
        <Response />
      </div>
    );
  }
}

export default App;