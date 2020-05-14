import React from 'react'


const NumberField = ({ handleValueChange, value}) => {
  return(
    <div>
      <input
        type="number"
        value={value}
        onChange={handleValueChange}
        id="valueField"
      />
      <p>{value || 0}</p>
    </div>
  )  
}

export default NumberField