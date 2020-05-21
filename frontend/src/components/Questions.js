import React, { useState } from 'react'
import Question from './Question'
import arrowRight from '../resources/arrow-right.png'
import arrowLeft from '../resources/arrow-left.png'
import SendCompanyAnswersButton from './SendCompanyAnswersButton'
import SendAnswersButton from './SendAnswersButton'

const Questions = ({ questions, currentQuestion, setCurrentQuestion, answers, setAnwers, setResults, calculation }) => {
  const [fade, setFade] = useState('question-fade')
  
  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setFade('question-fade-right')
      setCurrentQuestion(currentQuestion - 1)
      
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setFade('question-fade-left')
      setCurrentQuestion(currentQuestion + 1)
      
    }    
  }

  return (
    <div>      
      <div className={fade} onAnimationEnd={() => setFade('question-fade')}>
        <Question
          question={questions[currentQuestion]} 
          answers={answers} 
          setAnwers={setAnwers} 
        />
      </div>
      
      {
        currentQuestion > 0 ? 
          <img className='Arrow-icon' src={arrowLeft} alt='previous question' onClick={previousQuestion} /> 
          : null 
      }
      {        
        currentQuestion < questions.length - 1  ?  
          <img className='Arrow-icon' src={arrowRight} alt='next question' onClick={nextQuestion} /> 
          : 
          calculation === 'company' ?
            <SendCompanyAnswersButton values={answers} setResults={setResults} /> :
            <SendAnswersButton values={answers} setResults={setResults} />
      }
       
    </div>
  )
}

export default Questions
