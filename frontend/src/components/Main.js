import React from 'react'
import Mathinfo from './Mathinfo'
import Projectinfo from './Projectinfo'
import Video from './Video'

const Main = () => {
  return (
    <div className='Body'>
      <div className='Spacer-vertical'></div>
      <p className='Box'>Remote Society - Now!</p>
      <div>
        <Video />
      </div>
      <div>
        <Projectinfo />
      </div>
      <div>
        <Mathinfo />
      </div>
    </div>

  )
}

export default Main
