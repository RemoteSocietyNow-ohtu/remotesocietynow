import React, { useState } from 'react'
import Calculator from '../SubComponents/Calculator/Calculator'

const People = ({ login, signUp }) => { 
  const [questions, setQuestions] = useState([]) // Questions that are presented to user.
  const [answers, setAnwers] = useState({}) // Values of question fields
  const [results, setResults] = useState({}) // Results that are recieved from backend after sending values
  const [currentQuestion, setCurrentQuestion] = useState(0)

  return (
    <div>
      <Calculator 
        questions={questions}
        setQuestions={setQuestions}
        answers={answers}
        setAnwers={setAnwers}
        results={results}
        setResults={setResults}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        login={login}
        signUp={signUp}
      />
    </div>
  )
}

export default People
