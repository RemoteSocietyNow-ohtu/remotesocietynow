import React from 'react'

const MultipleChoiceField = ({ options, handleValueChange, value }) => {
  return(    
    <div>
      {options.map(option => 
        <button 
          className={value === option.value ? 'Choice-button-chosen' : 'Choice-button'}      
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