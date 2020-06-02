import React from 'react'

const TextField = ({ handleValueChange, value }) => {
  return (
    <div>
      <textarea
        className='Calculator-textareafield'
        value={value}
        onChange={handleValueChange}
      >        
      </textarea>
    </div>
  )
}

export default TextField