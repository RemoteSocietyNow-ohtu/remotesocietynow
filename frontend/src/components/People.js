import React, { useEffect, useState } from 'react'
import questionService from '../services/questionService'
import Questions from './Questions'

const People = () => {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    questionService.getQuestions()
      .then(res => setQuestions(res))
  }, [])
  
  return (
    <div>
      <div className='Body'>
        <div className='Spacer-vertical'></div>
        <h1 className='Box'>People</h1>
        <Questions questions={questions} />
      </div>
    </div>
  )
}

export default People
