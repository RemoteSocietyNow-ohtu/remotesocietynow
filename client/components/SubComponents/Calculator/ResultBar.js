import React from 'react'
import './Bar.css'

const ResultBar = ({ width, percent, type }) => {

  let progress = percent * width
  
  return (
    <div className="bar-div" style={{ width:  `${width}%`}}>
      <div style={{ width: `${progress}%` }} className={`${type}`}/>
    </div>
  )
}
  
export default  ResultBar