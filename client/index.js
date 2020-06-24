import React from 'react'
import { render } from 'react-dom'
import App from './App'
import LanguageContext from './Contexts/LanguageContext'
import { english } from './resources/language'


const refresh = () => render(
  <React.StrictMode>
    <LanguageContext.Provider value={english}>
      <App/>
    </LanguageContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

refresh()

if (module.hot) {
  module.hot.accept()
}
