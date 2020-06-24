import React, { useContext } from 'react'
import Projectinfo from '../SubComponents/Projectinfo'
import Video from '../SubComponents/Video'
import LanguageContext from '@root/client/Contexts/LanguageContext'
import arrowLeft from '../../resources/arrow-left.png'

const AboutUs = ({ setBody }) => {

  const language = useContext(LanguageContext)
  return (
    <div>
      <div className='GoBack-arrow-icon-div' onClick={() => setBody('main')}>
        <img src={arrowLeft} className='GDPRCompliance-arrow-icon' />
        <a className='Go-back-link'>{language.content.goBack}</a>
      </div>
      <h1 className='AboutUs-header'>{language.headers.about}</h1>
      <Video style={{ 'maxWidth': '80%' }} />
      <Projectinfo />
      <button className='AboutUs-calculatorChoice-button' onClick={() => setBody('calculatorChoice')}>{language.content.testReductions}</button>
    </div>
  )
}

export default AboutUs
