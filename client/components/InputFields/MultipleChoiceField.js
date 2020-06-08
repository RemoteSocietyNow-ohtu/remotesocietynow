import React from 'react'

const MultipleChoiceField = ({ options, handleValueChange, value, nextQuestion }) => {
  const handleOnClick = (event) => {
    handleValueChange(event)
    nextQuestion()    
  }

  return(    
    <div>
      {options.map(option => 
        <button 
          className={value === option.value ? 'Calculator-multiplechoice-button-chosen' : 'Calculator-multiplechoice-button'}      
          key={option.value} 
          value={option.value} 
          onClick={event => handleOnClick(event)}
        >
          {option.string}
        </button>)}
    </div>
  )
}

export default MultipleChoiceField