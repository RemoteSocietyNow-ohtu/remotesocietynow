import React, { useEffect, useState, useContext } from 'react'
import questionService from '../services/questionService'
import Questions from './Questions'
import Results from './Results'
import SendAnswersButton from './SendAnswersButton'
import LoadingScreen from './LoadingScreen'
import LanguageContext from '../Contexts/LanguageContext'

const initValues = questions => {
  return questions.reduce((newObject, question) => {
    return { 
      ...newObject, 
      [question.identifyingString]: question.defaultValue ? question.defaultValue : ' '
    }
  }, {})
}

const People = () => {
  const language = useContext(LanguageContext)
  const [questions, setQuestions] = useState([])
  const [values, setValues] = useState({})
  const [results, setResults] = useState({})

  useEffect(() => {
    questionService.getQuestions()
      .then(res => setQuestions(res))
  }, [])

  useEffect(() => {
    setValues(initValues(questions))
  }, [questions])

  if (questions.length === 0) {
    return (
      <div className='Body'>
        <LoadingScreen />
      </div>
    )
  }

  return (
    <div>
      <div className='Body'>
        <div className='Container'>
          <div className='Spacer-vertical'></div>
          <p className='Box'>{language.headers.people}</p>
          <Questions questions={questions} values={values} setValues={setValues} />
          <SendAnswersButton values={values} setResults={setResults} />          
          <div className='Question-separator'></div>
          <Results results={results} />
        </div>
      </div>
    </div>
  )
}

export default People
