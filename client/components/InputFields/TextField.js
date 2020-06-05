import React from 'react'

const TextField = ({ handleValueChange, value, nextQuestion }) => {
  return (
    <div>
      <input
        type="text"
        className='Calculator-textfield'
<<<<<<< HEAD
=======

>>>>>>> ca1a456198d9f17ed1c3f591badbdfc574938f76
        value={value}
        onChange={handleValueChange}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            nextQuestion()
          }
        }}
      >        
      </input>
    </div>
  )
}

export default TextField