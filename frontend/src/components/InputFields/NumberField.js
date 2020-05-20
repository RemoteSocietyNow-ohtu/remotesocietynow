import React from 'react'


const NumberField = ({ handleValueChange, value, minValue, maxValue}) => {
  console.log('Value in Number field:', value)
  return(
    <div>
      <input
        className='NumberField'
        type="number"
        onChange={handleValueChange}
        id="valueField"
        value={value}
        min={minValue}
        max={maxValue}
      />
    </div>
  )  
}

export default NumberField