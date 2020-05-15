import React from 'react'

const MultipleChoiceField = ({ options, handleValueChange, value }) => {
  return(
    <div>
      {options.map(option => 
        <button key={option} value={option.value} onClick={handleValueChange}>{option.string}</button>)}
      <p>{value}</p>
    </div>
  )
}

export default MultipleChoiceField