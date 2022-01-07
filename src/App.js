import React, { useState } from 'react';
import './App.scss';
import Footer from './Components/Footer/Footer';
import RequestForm from './Components/Form/Form';
import Header from './Components/Header/Header';
import Response from './Components/Results/Results';
import History from './Components/History/History';

const axios = require('axios');

function App() {
  const [appState, setAppState] = useState(
    {
      'url': '',
      'method': 'GET',
      'results': null,
      'status': null,
      'history': []
    }
  )

  const [isLoading, setLoading] = useState(false)

  const handleSubmit = async (method, url, body = {}) => {
    try {
      setLoading(true)
      let response = await axios({
        method: method,
        url: url,
        data: body,
        validateStatus: function (status) {
          return status;
        }
      })
      // Create result to use for history
      const result = {
        'method': method,
        'url': url,
        'results': response.data,
        'status': response.status
      }
      setAppState(
        {
          'method': method,
          'url': url,
          'results': response.data,
          'status': response.status,
          'history': [...appState.history, result]
        }
      )
    } catch (error) {
      console.warn(error)
    } finally {
      setLoading(false)
    }
  }
  
  const historyClick = (historyItem) => {
    setAppState(
      {
        'method': historyItem.method,
        'url': historyItem.url,
        'results': historyItem.results,
        'status': historyItem.status,
        'history': appState.history
      }
    )
  }

  return (
    <div className="App">
      <Header />
      <div className="main">
        <RequestForm handleSubmit={handleSubmit}/>
        <Response status={appState.status} results={appState.results} isLoading={isLoading}/>
        {appState.history.length ? <History historyClick={historyClick} history={appState.history}></History> : null}
      </div>
      <Footer />
    </div>
  );
}

export default App;