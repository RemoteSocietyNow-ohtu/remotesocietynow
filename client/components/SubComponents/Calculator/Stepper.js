import React from 'react'

const Stepper = ({ questions, currentQuestion, setCurrentQuestion }) => {
  return (
    <div className='Calculator-stepper-container'>
      <ul className='Calculator-stepper'>
        
        {questions.map(q => {
          if(q.number === currentQuestion) {
            return <li className='active' onClick={() => setCurrentQuestion(q.number)}></li>
          } else {
            return <li onClick={() => setCurrentQuestion(q.number)}></li>
          }                  
        }
        )}
        
      </ul>
    </div>
  )
}

export default Stepper