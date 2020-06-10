import React from 'react'

const MultipleChoiceField = ({ options, handleValueChange, value, nextQuestion, skipQuestion }) => {
  const handleOnClick = (event) => {
    handleValueChange(event)
    // if no other transportation is chosen (Myself calculator), skip the question about how many times other transportation is used
    if (event.target.value === 'no') {
      skipQuestion()
    } else {
      nextQuestion()
    }
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