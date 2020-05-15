import React, { useEffect, useState } from 'react'
import questionService from '../services/questionService'
import Questions from './Questions'
import Results from './Results'
import SendAnswersButton from './SendAnswersButton'

const initValues = questions => {
  return questions.reduce((newObject, question) => {
    return { ...newObject, [question.identifyingString]: 0 }
  }, {})
}

const People = () => {
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
    return <p>Haetaan kysymyksiä...</p>
  }

  console.log(values)

  return (
    <div>
      <div className='Body'>
        <div className='Container'>
          <div className='Spacer-vertical'></div>
          <h1 className='Box'>People</h1>
          <Questions questions={questions} values={values} setValues={setValues} />
          <SendAnswersButton values={values} setResults={setResults} />
          <Results results={results} />
        </div>
      </div>
    </div>
  )
}

export default People
