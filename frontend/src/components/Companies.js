import React, { useContext, useState, useEffect } from 'react'
import LanguageContext from '../Contexts/LanguageContext'
import questionService from '../services/questionService'
import Question from './Question'
import LoadingScreen from './LoadingScreen'

const initValues = questions => {
  return questions.reduce((newObject, question) => {
    return { 
      ...newObject, 
      [question.identifyingString]: question.defaultValue ? question.defaultValue : ' ',
      [question.identifyingString + 'Open']: ' '
    }
  }, {})
}

const Companies = () => {
  const language = useContext(LanguageContext)
  const [questions, setQuestions] = useState([])
  const [values, setValues] = useState({})
  //const [results, setResults] = useState({})
  const [currentQuestion, setCurrentQuestion] = useState(0)

  useEffect(() => {
    questionService.getQuestions()
      .then(res => {
        setQuestions(res)
        setValues(initValues(res))      
      })      
  }, [])

  if (Object.keys(values).length === 0 || questions.length === 0) {
    return (
      <div className='Body'>
        <LoadingScreen />
      </div>
    )
  }
  console.log(questions)
  console.log(values)
  
  return (
    <div>
      <div className='Body'>
        <div className='Spacer-vertical'></div>
        <p className='Box'>{language.headers.companies}</p>        
        <Question 
          question={questions[currentQuestion]} 
          value={values[questions[currentQuestion].identifyingString]} 
          setValue={(value) => setValues({...values, [questions[currentQuestion].identifyingString]: value})} 
        />        
        <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>&gt;&gt;</button>
      </div>
    </div>
  )
}

export default Companies
