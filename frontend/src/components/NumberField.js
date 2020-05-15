import React from 'react'


const NumberField = ({ handleValueChange, value, minValue, maxValue}) => {
  return(
    <div>
      <input
        className='NumberField'
        type="number"
        onChange={handleValueChange}
        defaultValue={0}
        id="valueField"
        value={value}
        min={minValue}
        max={maxValue}
      />
    </div>
  )  
}

export default NumberField