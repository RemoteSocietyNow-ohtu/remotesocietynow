import React from 'react'

const MultipleChoiceField = ({ options, handleValueChange }) => {
  console.log(options)
  return(    
    <div>
      {options.map(option => 
        <button 
          className='Choice-button' 
          key={option.value} 
          value={option.value} 
          onClick={handleValueChange}
        >
          {option.string}
        </button>)}
    </div>
  )
}

export default MultipleChoiceField