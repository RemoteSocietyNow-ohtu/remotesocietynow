import React, { useContext } from 'react'
import background from '../../resources/background.gif'
import LanguageContext from '../../Contexts/LanguageContext'
import NewsletterBox from '../SubComponents/Newsletter/NewsletterBox'

const Main = ({ setBody }) => {

  const language = useContext(LanguageContext)

  return (
    <div className='Container'>
      <div className='Main-container'>
        <div className='Main-content-left'>
          <h1 className='Heading'>{language.headers.mainHeader}</h1>
          <button className='Main-button' onClick={() => setBody('calculatorChoice')}>{language.buttons.main}</button>
          <p className='Main-lead-paragraph'>{language.content.lead}</p>
        </div>
        <div className='Main-content-right'>
          <img className='Main-background-video-gif' src={background} alt='backgroundImage' />
        </div>
      </div>
      <p className='Navigation-item' onClick={() => setBody('gdprCompliance')}>{language.buttons.data}</p>
      <NewsletterBox />
    </div>
  )
}

export default Main
