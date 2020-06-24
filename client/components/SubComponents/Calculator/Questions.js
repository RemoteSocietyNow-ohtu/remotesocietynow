import React, { useState, useContext } from 'react'
import Question from './Question'
import arrowRight from '../../../resources/arrow-right.png'
import arrowLeft from '../../../resources/arrow-left.png'
import LanguageContext from '@root/client/Contexts/LanguageContext'


const Questions = ({ questions, currentQuestion, setCurrentQuestion, answers, setAnwers }) => {
  const language = useContext(LanguageContext)  
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
          <a style={{ background: 'none', border: 'none' }} href='#' onClick={previousQuestion}><img className='Calculator-arrow-icon' src={arrowLeft} alt={language.buttons.previousQuestion} /></a>
          : null 
      }
      <a style={{ background: 'none', border: 'none' }} href='#' onClick={nextQuestion}><img className='Calculator-arrow-icon' src={arrowRight} alt={language.buttons.nextQuestion} /></a> 
    </div>
  )
}

export default Questions
