import React from 'react'
import Question from './Question'

const Questions = ({ questions }) => {
  return (
    <div>
      {questions.map((question) => <Question question={question.name} />)}
    </div>
  )
}

export default Questions
