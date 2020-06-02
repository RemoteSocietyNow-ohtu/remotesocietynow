import React, { useContext } from 'react'
import background from '../../resources/background.gif'
import LanguageContext from '../../Contexts/LanguageContext'

const Main = ({ setBody }) => {

  const language = useContext(LanguageContext)

  return (
    <div className='Container'>
      <div className='Main-content-left'>
        <p className='Heading'>{language.headers.mainHeader}</p>
        <button className='Main-button' onClick={() => setBody('calculatorChoice')}>{language.buttons.main}</button>
      </div>
      <div className='Main-content-right'></div>
      <img className='Main-background-video-gif' src={background} alt='backgroundImage' />
      <p className='Navigation-item' onClick={() => setBody('gdprCompliance')}>{language.buttons.data}</p>
    </div>
  )
}

export default Main
