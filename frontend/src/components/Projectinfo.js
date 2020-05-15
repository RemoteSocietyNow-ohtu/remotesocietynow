import React from 'react'

const infoEng = [
  'The Most Enjoyable Way to Save the Planet! While making more money and saving time.',
  'How does this save the planet?',
  'Remote-work and remote-life can become new key efforts in limiting CO2 emissions.',
  'For every employee switching to remote work, an average of X tons of harmful air pollution is reduced. This is the same as planting Y number of trees.',
  'Over time less office space needs to be used and built, which is like the effect of a forest. Imagine the environmental effect if 100,000 companies start doing this...',
  'Isn’t that costly? NO. You and your company actually earn real money and save time, plus productivity increases.',
  'Let us show you how! Leave your contact info and we’ll call back.',
  'For each legitimate business talk with a new client we will plant a real tree – for real.'
]

const Projectinfo = () => {
  return (
    <div className='Container'>
      <div className='Project-info'>
        <div className='Question-separator'></div>
        <div className='Container'>
          {infoEng.map((info, i) => <p key={i}>{info}</p>)}
        </div>
      </div>
    </div>
  )
}

export default Projectinfo
