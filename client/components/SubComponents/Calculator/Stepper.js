import React from 'react'

const Stepper = ({ questions, currentQuestion }) => {
  if (currentQuestion > questions.length - 1) {
    return null
  }
  return (
    <div className='Calculator-stepper-container'>
      <ul className='Calculator-stepper'>        
        {questions.map(q => {
          if(q.number === currentQuestion) {
            return <li className='active'></li>
          } else {
            return <li></li>
          }                  
        }
        )}        
      </ul>
    </div>
  )
}

export default Stepper