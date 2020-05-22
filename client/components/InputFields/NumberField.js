import React, { useState } from 'react'


const NumberField = ({ handleValueChange, value, minValue, maxValue}) => {  
  const [error, setError] = useState('')

  const validate = (event) => {
    let v = event.target.value
    if (v.length > 0 && !v.match(/^\d+$/)) {       
      setError('Only digits allowed.')   
    } else {
      setError('')
      handleValueChange(event) 
    }
  }

  return (
    <div>
      {error !== '' && <p className='Error'>{error}</p>}
      <input
        className='NumberField'
        type="text"
        onChange={(event) => validate(event)}
        id="valueField"
        value={value}
        min={minValue}
        max={maxValue}
      />
    </div>
  )
}

export default NumberField