import React from 'react'
import Question from './Question'
import LoadingScreen from './LoadingScreen'



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
      <button onClick={previousQuestion}>&lt;&lt;</button>      
      <button onClick={nextQuestion}>&gt;&gt;</button>   
    </div>
  )
}

export default Questions
