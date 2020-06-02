import React, {useState,useEffect} from 'react'
import '../../../App.css'

const ResultBar = ({ width, percent, type }) => {

  const [value, setValue] = useState(0)

  useEffect(() => {
    setValue(percent * 100)
  })


  if(type === 'hiddenbar'){
    return(
      <div></div>
    )
  }
  
  return (
    <div className="Calculator-resultbar-container" style={{ width:  `${width}%`}}>
      <div style={{ width: `${value}%` }} className={`${type}`}/>
    </div>
  )
}
  
export default  ResultBar