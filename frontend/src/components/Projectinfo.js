import React from 'react'

const style = {
  display: 'inline-block',
  padding: '15px',
  fontSize: '16px',
  width:'400px',
  border:'solid',
  borderWidth: '5px,0,0',
  float: 'right',
  marginTop: '2%',
  marginRight:'10%',
  backgroundColor:'lightgreen'
}

const info = [
  'The Most Enjoyable Way to Save the Planet! While making more money and saving time.',
  'How does this save the planet?',
  'Remote-work and remote-life can become new key efforts in limiting CO2 emissions.',
  'For every employee switching to remote work, an average of X tons of harmful air pollution is reduced. This is the same as planting Y number of trees.',
  'Over time less office space needs to be used and built, which is like the effect of a forest. Imagine the environmental effect if 100,000 companies start doing this...',
  'Isn’t that costly? NO. You and your company actually earn real money and save time, plus productivity increases.',
  'Let us show you how! Leave your contact info and we’ll call back.',
  'For each legitimate business talk with a new client we will plant a real tree – for real.'
]

const Projectinfo = (props) => {
  return(
    <div style={style}>
      <h2>Remote Society - Now!</h2>
      {info.map((info, i) => <p key={i}>{info}</p>)}
    </div>
  )
}

export default Projectinfo
