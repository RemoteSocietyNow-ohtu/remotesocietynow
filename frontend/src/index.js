import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import LanguageContext from './Contexts/LanguageContext'
import { english } from './resources/language'

ReactDOM.render(
  <React.StrictMode>
    <LanguageContext.Provider value={english}>
      <App />
    </LanguageContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
