import React from 'react'
import Projectinfo from '../SubComponents/Projectinfo'
import Video from '../SubComponents/Video'

const AboutUs = ({ setBody }) => {
  return (
    <div>
      <h1 className='AboutUs-header'>About Us</h1>
      <Video style={{'maxWidth': '80%'}} />
      <Projectinfo />
      <button className='AboutUs-calculatoChoice-button' onClick={() => setBody('calculatorChoice')}>Test your reductions now!</button>
    </div>
  )
}

export default AboutUs
