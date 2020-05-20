import React from 'react'
import Question from './Question'
import LoadingScreen from './LoadingScreen'
import arrowRight from '../resources/arrow-right.png'
import arrowLeft from '../resources/arrow-left.png'

const Questions = ({ questions, currentQuestion, setCurrentQuestion, answers, setAnwers }) => {
  // Return loading screen if question and aswer states are not ready
  if (Object.keys(answers).length === 0 || questions.length === 0) { 
    return (
      <div className='Body'>
        <LoadingScreen />
      </div>
    )
  }
  
  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
  }

  return (
    <div>
      <Question
        question={questions[currentQuestion]} 
        answers={answers} 
        setAnwers={setAnwers} 
      />
      <img className='Arrow-icon' src={arrowLeft} alt='previous question' onClick={previousQuestion} />      
      <img className='Arrow-icon' src={arrowRight} alt='next question' onClick={nextQuestion} />   
    </div>
  )
}

export default Questions
