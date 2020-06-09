import React from 'react'

const EmailField = ({ handleValueChange, value }) => {
  return (
    <div>
      <input
        type="text"
        className='SignIn-emailfield'
        value={value}
        onChange={handleValueChange}
      >        
      </input>
    </div>
  )
}

export default EmailField
