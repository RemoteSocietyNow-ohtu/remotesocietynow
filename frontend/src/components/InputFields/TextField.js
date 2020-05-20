import React from 'react'

const TextField = ({ handleValueChange, value }) => {
  return (
    <div>
      <textarea 
        value={value}
        onChange={handleValueChange}
      >        
      </textarea>
    </div>
  )
}

export default TextField