import React from 'react'
import TicksSlider from '../SubComponents/TicksSlider'

const SliderField = ({ handleValueChange, handleRelease, value, minValue, maxValue, unit }) => {
  
  return(
    <div>
      <div className='Calculator-sliderfield-container'>
        <input
          type="range" 
          min={minValue} 
          max={maxValue}
          onChange={handleValueChange}  
          onMouseUp={handleRelease}
          onTouchEnd={handleRelease}      
          value={value}
          className='Calculator-sliderfield'
        />
        {maxValue === '7' ? <TicksSlider width='14.13%' /> : null}
      </div>
      <p>{value} {unit}</p>
    </div>
  )
}

export default SliderField