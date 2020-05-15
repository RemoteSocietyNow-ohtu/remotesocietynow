import React, { useEffect, useState } from 'react'
import questionService from '../services/questionService'
import Questions from './Questions'
import Results from './Results'
import loadingAnimation from '../resources/loading.gif'

const initValues = questions => {
  return questions.reduce((newObject, question) => {
    return { ...newObject, [question.identifyingString]: 0 }
  }, {})
}

const People = () => {
  const [questions, setQuestions] = useState([])
  const [values, setValues] = useState({})

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
        <div className='Container'>
          <img className='Loading-animation' src={loadingAnimation} alt='loading animation' />
          <h3>Loading...</h3>
        </div>
      </div>
    )
  }

  console.log(values)

  return (
    <div>
      <div className='Body'>
        <div className='Container'>
          <div className='Spacer-vertical'></div>
          <h1 className='Box'>Laskuri</h1>
          <Questions questions={questions} values={values} setValues={setValues} />
          <div className='Question-separator'></div>
          <Results values={values} />
        </div>
      </div>
    </div>
  )
}

export default People
