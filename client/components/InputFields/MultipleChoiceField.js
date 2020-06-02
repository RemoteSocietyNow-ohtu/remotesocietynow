import React from 'react'

const MultipleChoiceField = ({ options, handleValueChange, value }) => {
  return(    
    <div>
      {options.map(option => 
        <button 
          className={value === option.value ? 'Calculator-multiplechoice-button-chosen' : 'Calculator-multiplechoice-button'}      
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