import React from 'react';
import ReactDOM from 'react-dom';
import './css';
import Home from './Home.jsx';
import { BrowserRouter as Router } from 'react-router-dom'
import { OptionsStyleProvider } from './context'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <OptionsStyleProvider>
        <Home />
      </OptionsStyleProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("main")
)
