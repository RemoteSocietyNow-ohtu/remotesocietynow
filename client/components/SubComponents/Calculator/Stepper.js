import React from 'react'

const Stepper = ({ questions, currentQuestion, setCurrentQuestion }) => {
  if (currentQuestion > questions.length - 1) {
    return null
  }
  return (
    <div className='Calculator-stepper-container'>
      <ul className='Calculator-stepper'>        
        {questions.map(q => {
          if(q.number === currentQuestion) {
            return <li 
              key={q.number} 
              className='active'
              onClick={() => setCurrentQuestion(q.number)}></li>
          } else {
            return <li 
              key={q.number}
              onClick={() => setCurrentQuestion(q.number)}></li>
          }                  
        }
        )}        
      </ul>
    </div>
  )
}

export default Stepper