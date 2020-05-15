import React from 'react'


const NumberField = ({ handleValueChange, value, minValue, maxValue}) => {
  return(
    <div>
      <input
        type="number"
        value={value}
        onChange={handleValueChange}
        id="valueField"
        min={minValue}
        max={maxValue}
      />
      <p>{value || 0}</p>
    </div>
  )  
}

export default NumberField