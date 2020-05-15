import React from 'react'

const SliderField = ({ handleValueChange, value, minValue, maxValue, unit }) => {
  return(
    <div>
      <input
        type="range" 
        min={minValue} 
        max={maxValue}
        onChange={handleValueChange}
        value={value}
      />
      <p>{value} {unit}</p>
    </div>
  )
}

export default SliderField