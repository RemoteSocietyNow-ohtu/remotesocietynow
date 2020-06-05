import React from 'react'

const TextAreaField = ({ handleValueChange, value, size, placeholder }) => {
  return (
    <textarea
      className='Calculator-textAreafield'
      size={size}   
      value={value}
      onChange={handleValueChange}
      placeholder={placeholder}
    >        
    </textarea>)
}

export default TextAreaField 