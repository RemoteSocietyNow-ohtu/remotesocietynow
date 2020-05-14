import React from 'react'

const SliderField = ({ handleValueChange, value }) => {
  return(
    <div>
      <input
        type="range" 
        min='0' 
        max='100' 
        onChange={handleValueChange}
        value={value} 
        className='slider' 
      />
      <p>{value}%</p>
    </div>
  )
}

export default SliderField