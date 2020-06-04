import React from 'react'

const Stepper = ({ questions, currentQuestion }) => {
  return (
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
  )
}

export default Stepper