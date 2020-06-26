import React, { useContext } from 'react'
import Projectinfo from '../SubComponents/Projectinfo'
//import Video from '../SubComponents/Video'
import LanguageContext from '@root/client/Contexts/LanguageContext'
import BackButton from 'Components/Navigation/BackButton'
import aboutUsIcon from '../../resources/aboutUs-icon-white.png'

const AboutUs = ({ setBody }) => {

  const language = useContext(LanguageContext)
  return (
    <div>
      
      <h2 className='AboutUs-header'>
        <img className='Main-bottom-bar-icon' src={aboutUsIcon} alt='about us' />
        {language.headers.about}
      </h2>
      <div className='AboutUs-projectinfo-container'>
        <div className='Line-separator-vertical'></div>
        {/*<Video style={{ 'maxWidth': '80%' }} />*/}
        <Projectinfo />
        <div className='Line-separator-vertical'></div>   
        <BackButton handleOnClick={() => setBody('main')} />
      </div>
      <button className='AboutUs-calculatorChoice-button' onClick={() => setBody('calculatorChoice')}>{language.content.testReductions}</button>      
    </div>
  )
}

export default AboutUs
