import React, { useContext } from 'react'
import Projectinfo from '../SubComponents/Projectinfo'
import Video from '../SubComponents/Video'
import LanguageContext from '@root/client/Contexts/LanguageContext'

const AboutUs = ({ setBody }) => {

  const language = useContext(LanguageContext)
  return (
    <div>
      <h1 className='AboutUs-header'>{language.headers.about}</h1>
      <Video style={{'maxWidth': '80%'}} />
      <Projectinfo />
      <button className='AboutUs-calculatorChoice-button' onClick={() => setBody('calculatorChoice')}>{language.content.testReductions}</button>
    </div>
  )
}

export default AboutUs
