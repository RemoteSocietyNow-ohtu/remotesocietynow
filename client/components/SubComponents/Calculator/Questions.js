import React, { useState } from 'react'
import Question from './Question'
import arrowRight from '../../../resources/arrow-right.png'
import arrowLeft from '../../../resources/arrow-left.png'
import SendAnswersButton from './SendAnswersButton'

const Questions = ({ questions, currentQuestion, setCurrentQuestion, answers, setAnwers }) => {
  const [fade, setFade] = useState('question-no-fade')
  
  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setFade('question-fade-right')      
      setTimeout(() => {setCurrentQuestion(currentQuestion - 1)}, 250)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setFade('question-fade-left')
      setTimeout(() => {setCurrentQuestion(currentQuestion + 1)}, 250)      
    }    
  }

  return (
    <div>      
      <div className={fade} onAnimationEnd={() => setFade('question-no-fade')}>
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
          <SendAnswersButton currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />
      }       
    </div>
  )
}

export default Questions
