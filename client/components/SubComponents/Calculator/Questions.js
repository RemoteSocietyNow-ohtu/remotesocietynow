import React, { useState } from 'react'
import Question from './Question'
import arrowRight from '../../../resources/arrow-right.png'
import arrowLeft from '../../../resources/arrow-left.png'


const Questions = ({ questions, currentQuestion, setCurrentQuestion, answers, setAnwers }) => {
  const [fade, setFade] = useState('question-no-fade')
  
  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setFade('Calculator-question-fade-right')      
      setTimeout(() => {setCurrentQuestion(currentQuestion - 1)}, 250)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length) {
      setFade('Calculator-question-fade-left')
      setTimeout(() => {setCurrentQuestion(currentQuestion + 1)}, 250)      
    }    
  }

  const skipQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setFade('Calculator-question-fade-left')
      setTimeout(() => {setCurrentQuestion(currentQuestion + 2)}, 250)      
    }
  }

  return (
    <div>          
      <div className={fade} onAnimationEnd={() => setFade('question-no-fade') } >
        <Question
          question={questions[currentQuestion]} 
          answers={answers} 
          setAnwers={setAnwers} 
          nextQuestion={nextQuestion}
          skipQuestion={skipQuestion}
        />
      </div>
      {
        currentQuestion > 0 ? 
          <img className='Calculator-arrow-icon' src={arrowLeft} alt='previous question' onClick={previousQuestion} /> 
          : null 
      }
      <img className='Calculator-arrow-icon' src={arrowRight} alt='next question' onClick={nextQuestion} /> 
    </div>
  )
}

export default Questions
