import React, { useContext } from 'react'
import background from '../resources/background.mp4'
import LanguageContext from '../Contexts/LanguageContext'

const Main = () => {

  const language = useContext(LanguageContext)

  return (
    <div className='Body'>
      <video className='Background-video-main' autoPlay muted loop>
        <source src={background} type='video/mp4' />
      </video>
      <div className='Content-main-left'></div>
      <div className='Content-main-right'>
        <p className='Heading'>{language.headers.mainHeader}</p>
        <p>{language.mainContent}</p>
      </div>
    </div>

  )
}

export default Main
