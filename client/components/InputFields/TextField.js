import React from 'react'

const TextField = ({ handleValueChange, value }) => {
  return (
    <div>
      <input
        type="text"
        className='InputField'
        value={value}
        onChange={handleValueChange}
      >        
      </input>
    </div>
  )
}

export default TextField