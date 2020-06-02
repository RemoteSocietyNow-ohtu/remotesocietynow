import React from 'react'

const SliderField = ({ handleValueChange, handleRelease, value, minValue, maxValue, unit }) => {
  return(
    <div>
      <input
        type="range" 
        min={minValue} 
        max={maxValue}
        onChange={handleValueChange}
        onMouseUp={handleRelease}
        value={value}
        className='Calculator-sliderfield'
      />
      <p>{value} {unit}</p>
    </div>
  )
}

export default SliderField