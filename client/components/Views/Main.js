import React, { useContext } from 'react'
import background from '../../resources/background.gif'
import LanguageContext from '../../Contexts/LanguageContext'

const Main = ({ setBody }) => {

  const language = useContext(LanguageContext)

  return (
    <div className='Container'>
      <div className='Content-main-left'>
        <p className='Heading'>{language.headers.mainHeader}</p>
        <button className='Main-button' onClick={() => setBody('calculatorChoice')}>{language.buttons.main}</button>
      </div>
      <div className='Content-main-right'></div>
      <img className='Background-video-main-gif' src={background} alt='backgroundImage' />
      <p className='Navigation-item' onClick={() => setBody('gdprCompliancy')}>{language.buttons.data}</p>
    </div>
  )
}

export default Main
