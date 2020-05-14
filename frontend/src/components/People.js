import React, { useEffect, useState } from 'react'
import questionService from '../services/questionService'
import Questions from './Questions'

const initValues = questions => {
  const newObject = {}
  questions.forEach(question => {
    newObject[question.name] = 0
  })
  return newObject
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
  
  console.log(values)

  if(questions.length === 0) {
    return <p>Haetaan kysymyksiä...</p>
  }

  return (
    <div>
      <div className='Body'>
        <div className='Spacer-vertical'></div>
        <h1 className='Box'>People</h1>
        <Questions questions={questions} values={values} setValues={setValues} />        
      </div>
    </div>
  )
}

export default People
