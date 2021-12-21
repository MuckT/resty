import React from 'react';
import './App.scss';
import Footer from './Components/Footer/Footer';
import RequestForm from './Components/Form/Form';
import Header from './Components/Header/Header';
import Response from './Components/Results/Results';
const axios = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      method: 'GET',
      results: null
    }
  }

  handleSubmit = async (method, url, body = {}) => {
    let response = await axios({
      method: method,
      url: url,
      data: body
    })
    this.setState({
      url: url,
      method: method,
      results: response
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <RequestForm handleSubmit={this.handleSubmit}/>
        <Response results={this.state.results}/>
        <Footer />
      </div>
    );
  }
}

export default App;