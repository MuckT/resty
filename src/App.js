import React, {useState} from 'react';
import './App.scss';
import Footer from './Components/Footer/Footer';
import RequestForm from './Components/Form/Form';
import Header from './Components/Header/Header';
import Response from './Components/Results/Results';
const axios = require('axios');


function App() {
  const [appState, setAppState] = useState(
    {
      'url': '',
      'method': 'GET',
      'results': null,
      'status': null
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
      setAppState(
        {
          'method': method,
          'url': url,
          'results': response.data,
          'status': response.status
        }
      )
    } catch (error) {
      console.warn(error)
    } finally {
      setLoading(false)
    }
  } 

  return (
    <div className="App">
      <Header />
      <div className="main">
        <RequestForm handleSubmit={handleSubmit}/>
        <Response status={appState.status} results={appState.results} isLoading={isLoading}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;