import React from 'react'

const MultipleChoiceField = ({ options, handleValueChange }) => {
  return(
    <div>
      {options.map(option => 
        <button className='Choice-button' key={option} value={option.value} onClick={handleValueChange}>{option.string}</button>)}
    </div>
  )
}

export default MultipleChoiceField