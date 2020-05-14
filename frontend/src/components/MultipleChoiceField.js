import React from 'react'

const MultipleChoiceField = ({ options, handleValueChange, value }) => {
  return(
    <div>
      {options.map(option => 
        <button key={option} value={option} onClick={handleValueChange}>{option}</button>)}
      <p>{value}</p>
    </div>
  )
}

export default MultipleChoiceField