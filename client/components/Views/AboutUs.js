import React from 'react'
import Projectinfo from '../SubComponents/Projectinfo'
import Mathinfo from '../SubComponents/Mathinfo'
import Video from '../SubComponents/Video'

const AboutUs = () => {
  return (
    <div>
      <h1 className='AboutUs-header'>About Us</h1>
      <Video style={{'maxWidth': '80%'}} />
      <Projectinfo />
      <Mathinfo />
    </div>
  )
}

export default AboutUs
