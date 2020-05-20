import React from 'react'

const Video = () => {
  return (
    <div>
      <div className='Container'>
        <div className='Video-container'>
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
    </div>
  )
}

export default Video
