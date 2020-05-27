import React, { useContext } from 'react'
import background from '../../resources/background.mp4'
import LanguageContext from '../../Contexts/LanguageContext'

const Main = () => {

  const language = useContext(LanguageContext)

  return (
    <div className='Container'>
      <div className='Content-main-left'>
        <p className='Heading'>{language.headers.mainHeader}</p>
        <p className='Content-main'>{language.content.main}</p>
      </div>
      <div className='Content-main-right'></div>
      <video className='Background-video-main' autoPlay muted loop>
        <source src={background} type='video/mp4' />
      </video> 
    </div>

  )
}

export default Main
