import React from 'react'

const placeholder = 
`1. Type of cost
2. Type of cost
3. Type of cost
4. Type of cost
5. Type of cost`

const TextAreaField = ({ handleValueChange, value, size }) => {
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