import React, { useContext } from 'react'
import background from '../../resources/background.gif'
import LanguageContext from '../../Contexts/LanguageContext'

const Main = ({ setBody }) => {

  const language = useContext(LanguageContext)

  return (
    <div className='Container'>
      <div className='Main-container'>
        <div className='Main-content-left'>
          
          <h1 className='Heading'>{language.headers.mainHeader}</h1>
          <button className='Main-button' onClick={() => setBody('calculatorChoice')}>{language.buttons.main}</button>
          <p style={{fontSize: '0.5em', marginTop: '2rem'}}>Reducing our carbon emissions is Remote work the primary way Remote work to fight climate change Remote work. But it is not enough. Remote work each of us must also start removing.</p>
        </div>
        <div className='Main-content-right'>
          <img className='Main-background-video-gif' src={background} alt='backgroundImage' />
        </div>
        
        
      </div>
      <p className='Navigation-item' onClick={() => setBody('gdprCompliance')}>{language.buttons.data}</p>
    </div>
  )
}

export default Main
