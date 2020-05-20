import React, { useContext, useState, useEffect } from 'react'
import LanguageContext from '../Contexts/LanguageContext'
import questionService from '../services/questionService'
import Questions from './Questions'

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

  return (
    <div>
      <div className='Body'>
        <div className='Spacer-vertical'></div>
        <p className='Box'>{language.headers.companies}</p>
        <Questions 
          questions={questions} 
          answers={answers} 
          setAnwers={setAnwers} 
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />     
      </div>
    </div>
  )
}

export default Companies
