import React, { useContext } from 'react'
import background from '../../resources/background.mp4'
import LanguageContext from '../../Contexts/LanguageContext'

const Main = ({ setBody }) => {

  const language = useContext(LanguageContext)

  return (
    <div className='Container'>
      <div className='Content-main-left'>
        <p className='Heading'>{language.headers.mainHeader}</p>
        <button className='Main-button' onClick={() => setBody('people')}>{language.buttons.main}</button>
      </div>
      <div className='Content-main-right'></div>
      <video className='Background-video-main' autoPlay muted loop>
        <source src={background} type='video/mp4' />
      </video> 
      <p className='Navigation-item' onClick={() => setBody('gdprCompliancy')}>{language.buttons.data}</p>
    </div>

  )
}

export default Main
