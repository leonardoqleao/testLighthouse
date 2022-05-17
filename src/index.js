import React from 'react';
import ReactDOM from 'react-dom';
import './css';
import Home from './Home.jsx';
import { BrowserRouter as Router } from 'react-router-dom'
import { OptionsNavbarProvider } from './context'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <OptionsNavbarProvider>
        <Home />
      </OptionsNavbarProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("main")
)
