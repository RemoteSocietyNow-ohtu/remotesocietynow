import React from 'react'

const Mathinfo = () => {
  return(
    <div className='Math-info'>
      <h2>About the math</h2>
      <p>We factor in the following variables: more text to be added</p>
      <div
        className='video'
        style={{
          position: 'relative',
          paddingBottom: '56.25%' /* 16:9 */,
          paddingTop: 25,
          height: 0
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          title='projectInfoVideo'
          src={'https://player.vimeo.com/video/412161185'}
          frameBorder="0"
        />
      </div>
    </div>
  )
}

export default Mathinfo
