import React, {useState,useEffect} from 'react'
import './Bar.css'

const ResultBar = ({ width, percent, type }) => {

  const [value, setValue] = useState(0)

  useEffect(() => {
    setValue(percent * width)
  })


  if(type === 'hiddenbar'){
    return(
      <div></div>
    )
  }
  
  return (
    <div className="bar-div" style={{ width:  `${width}%`}}>
      <div style={{ width: `${value}%` }} className={`${type}`}/>
    </div>
  )
}
  
export default  ResultBar