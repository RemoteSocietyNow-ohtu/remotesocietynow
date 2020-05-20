import React from 'react'

const TextField = ({ handleValueChange, value }) => {
  return (
    <div>
      <textarea 
        rows="4" 
        cols="50"
        value={value}
        onChange={handleValueChange}
      >        
      </textarea>
    </div>
  )
}

export default TextField