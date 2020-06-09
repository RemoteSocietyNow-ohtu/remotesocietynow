import React from 'react'

const PasswordField = ({ handleValueChange, value }) => {
  return (
    <div>
      <input
        type="password"
        className='SignUp-passwordfield'
        value={value}
        onChange={handleValueChange}
      >        
      </input>
    </div>
  )
}

export default PasswordField
