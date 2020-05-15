import React from 'react'

const SliderField = ({ handleValueChange, value, minValue, maxValue }) => {
  return(
    <div>
      <input
        type="range" 
        min={minValue} 
        max={maxValue}
        onChange={handleValueChange}
        value={value} 
        className='slider' 
      />
      <p>{value}%</p>
    </div>
  )
}

export default SliderField