import React, { useContext, useState, useEffect } from 'react'
import LanguageContext from '../Contexts/LanguageContext'
import questionService from '../services/questionService'
import Question from './Question'
import LoadingScreen from './LoadingScreen'

//answerValues get initial values. It is default value if such is available, otherwise empty string
const initAnswerValues = questions => {
  return questions.reduce((newObject, question) => {
    return { 
      ...newObject, 
      [question.identifyingString]: question.defaultValue ? question.defaultValue : ' ',
      [question.identifyingString + 'Open']: ''
    }
  }, {})
}

const Companies = () => {
  const language = useContext(LanguageContext)
  const [questions, setQuestions] = useState([]) // Questions that are presented to user.
  const [answers, setAnwers] = useState({}) // Values of question fields
  //const [results, setResults] = useState({}) // Results that are recieved from backend after sending values
  const [currentQuestion, setCurrentQuestion] = useState(0)

  //Fetch questions and init question and aswer states
  useEffect(() => {
    questionService.getQuestions()
      .then(res => {
        setQuestions(res)
        setAnwers(initAnswerValues(res))      
      })      
  }, [])

  // Return loading screen if question and aswer states are not ready
  if (Object.keys(answers).length === 0 || questions.length === 0) { 
    return (
      <div className='Body'>
        <LoadingScreen />
      </div>
    )
  }
  console.log(answers)
  
  return (
    <div>
      <div className='Body'>
        <div className='Spacer-vertical'></div>
        <p className='Box'>{language.headers.companies}</p>
        <Question 
          question={questions[currentQuestion]} 
          answers={answers} 
          setAnwers={setAnwers} 
        />        
        <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>&gt;&gt;</button>
      </div>
    </div>
  )
}

export default Companies
