import React from 'react'
import loadingAnimation from '../../resources/loading.gif'

const LoadingScreen = () => {
  return (
    <div className='Container'>
      <img className='LoadingScreen-loading-animation' src={loadingAnimation} alt='loading animation' />
      <h3>Loading...</h3>
    </div>
  )
}

export default LoadingScreen
