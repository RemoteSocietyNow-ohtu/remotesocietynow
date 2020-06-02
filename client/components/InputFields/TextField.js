import React from 'react'

const TextField = ({ handleValueChange, value, nextQuestion }) => {
  return (
    <div>
      <input
        type="text"
        className='InputField'
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