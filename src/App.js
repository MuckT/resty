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
      'results': null
    }
  )
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = async (method, url, body = {}) => {
    setLoading(true)
    let response = await axios({
      method: method,
      url: url,
      data: body
    })
    setAppState({ ...response })
    setLoading(false)
  } 

  return (
    <div className="App">
      <Header />
      <RequestForm handleSubmit={handleSubmit}/>
      <Response results={appState.results} isLoading={isLoading}/>
      <Footer />
    </div>
  );
}

export default App;