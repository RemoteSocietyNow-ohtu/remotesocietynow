import React from 'react'
import Mathinfo from './Mathinfo'
import Projectinfo from './Projectinfo'


const Main = () => {
  return (
    <div className='Body'>
      <div className='Spacer-vertical'></div>
      <h1 className='Box'>Main</h1>
      <div>       
        <Mathinfo/>
      </div>
      <div>
        <Projectinfo />
      </div>
    </div>
    
  )
}

export default Main
