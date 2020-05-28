import React, { useState, useContext, useEffect } from 'react'
import './Bar.css'

const ResultBar = ({ width, percent, type }) => {
    const [value, setValue] = React.useState(0);
  
    React.useEffect(() => {
      setValue(percent * width);
    });
  
    let progress = percent * width;
  
    return (
      <div className="bar-div" style={{ width:  `${width}%`}}>
        <div style={{ width: `${progress}%` }} className={`${type}`}/>
      </div>
    )
  }
  
  export default  ResultBar