import React from 'react'
import Question from './Question'
import arrowRight from '../resources/arrow-right.png'
import arrowLeft from '../resources/arrow-left.png'
import SendCompanyAnswersButton from './SendCompanyAnswersButton'

const Questions = ({ questions, currentQuestion, setCurrentQuestion, answers, setAnwers, setResults }) => {
  
  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
    
  }

  return (
    <div>
      
          
      <Question
        question={questions[currentQuestion]} 
        answers={answers} 
        setAnwers={setAnwers} 
      />
      <img className='Arrow-icon' src={arrowLeft} alt='previous question' onClick={previousQuestion} />
      {
        currentQuestion < questions.length - 1  ?
          
                  
          <img className='Arrow-icon' src={arrowRight} alt='next question' onClick={nextQuestion} /> 
         
          : 
          <SendCompanyAnswersButton values={answers} setResults={setResults} />
      }
       
    </div>
  )
}

export default Questions
